import {
  ChangeDetectionStrategy,
  Component,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { ToastrService } from 'libs/helpers/src/lib/toastr/toastr.service';
import { BehaviorSubject, finalize } from 'rxjs';
import { CartService } from 'src/app/modules/cart/services/cart.service';
import { CatalogueItemModel } from '../../models/catalogue-item';
import { CatalogueItemsStorageService } from '../../services/catalogue-items-storage.service';
import { CatalogueItemsService } from '../../services/catalogue-items.service';

@UntilDestroy()
@Component({
  selector: 'pipes-catalogue-item',
  templateUrl: './catalogue-item.component.html',
  styleUrls: ['./catalogue-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CatalogueItemComponent implements OnInit, OnDestroy {
  loading = false;
  disableAddBtn = false;
  quantity = 1;
  max = 5;

  get id(): number {
    return +(this.route.snapshot.paramMap.get('id') || 0);
  }

  get item$(): BehaviorSubject<CatalogueItemModel | null> {
    return this.storageService.item$;
  }

  constructor(
    private storageService: CatalogueItemsStorageService,
    private httpService: CatalogueItemsService,
    private cartService: CartService,
    private route: ActivatedRoute,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.getItem();
  }

  ngOnDestroy(): void {
    this.storageService.item$.next(null);
  }

  increment(): void {
    this.quantity += 1;
  }

  decrement(): void {
    this.quantity -= 1;
  }

  addToCart(): void {
    this.disableAddBtn = true;
    this.cartService
      .add(this.id, this.quantity)
      .pipe(
        finalize(() => (this.disableAddBtn = false)),
        untilDestroyed(this)
      )
      .subscribe({
        next: (res) => {
          if (res.overflow) {
            this.toastr.toast(
              `${
                res.overflow > 1
                  ? res.overflow + ' items were'
                  : res.overflow + ' item was'
              } not added because product has a limit of 5 per order`,
              'info'
            );
          } else {
            this.toastr.toast('Cart updated', 'success');
          }
        },
        error: (err) => {
          this.toastr.toast(err.error.error, 'error');
        },
      });
  }

  private getItem(): void {
    console.log('getItem');
    this.loading = true;

    this.httpService
      .getItem(this.id)
      .pipe(
        finalize(() => {
          this.loading = false;
        }),
        untilDestroyed(this)
      )
      .subscribe();
  }
}
