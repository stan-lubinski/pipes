import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { ButtonComponent, CartItemCardComponent } from '@pipes/ui';
import { BehaviorSubject, finalize } from 'rxjs';
import { CartItemModel } from './models/cart';
import { CartStorageService } from './services/cart-storage.service';
import { CartService } from './services/cart.service';

@UntilDestroy()
@Component({
  selector: 'pipes-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    HttpClientModule,
    CartItemCardComponent,
    ButtonComponent,
  ],
})
export class CartComponent implements OnInit {
  loading = false;
  totalPrice = 0;

  get items$(): BehaviorSubject<CartItemModel[] | null> {
    return this.storageService.items$;
  }

  constructor(
    private httpService: CartService,
    private storageService: CartStorageService,
    private cdRef: ChangeDetectorRef,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.listenToStorage();
    this.getItems();
  }

  completePurchase(): void {
    this.router.navigate(['/success']);
    this.httpService.clear().pipe(untilDestroyed(this)).subscribe();
  }

  calcTotal(): void {
    this.totalPrice = 0;
    if (this.items$.getValue()) {
      this.items$.getValue()?.forEach((el) => {
        this.totalPrice += el.price * el.count;
      });
    }
  }

  addItem(id: number): void {
    this.httpService
      .add(id)
      .pipe(untilDestroyed(this))
      .subscribe({
        next: () => this.getItems(),
      });
  }

  remove(id: number, count?: boolean): void {
    this.httpService
      .remove(id, count)
      .pipe(untilDestroyed(this))
      .subscribe({
        next: () => this.getItems(),
      });
  }

  private listenToStorage(): void {
    this.storageService.items$.pipe(untilDestroyed(this)).subscribe({
      next: () => {
        this.calcTotal();
        this.cdRef.markForCheck();
      },
    });
  }

  private getItems(): void {
    this.loading = true;
    this.httpService
      .getCart()
      .pipe(
        finalize(() => (this.loading = false)),
        untilDestroyed(this)
      )
      .subscribe();
  }
}
