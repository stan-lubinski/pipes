import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { ToastrService } from 'libs/helpers/src/lib/toastr/toastr.service';
import { BehaviorSubject, finalize } from 'rxjs';
import { CartService } from 'src/app/modules/cart/services/cart.service';
import { CatalogueItemModel } from '../../models/catalogue-item';
import { CatalogueItemsStorageService } from '../../services/catalogue-items-storage.service';
import { CatalogueItemsService } from '../../services/catalogue-items.service';

@UntilDestroy()
@Component({
  selector: 'pipes-catalogue-items',
  templateUrl: './catalogue-items.component.html',
  styleUrls: ['./catalogue-items.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CatalogueItemsComponent implements OnInit, OnDestroy {
  loading = false;
  disabledBtn!: number | undefined;

  get items$(): BehaviorSubject<CatalogueItemModel[] | null> {
    return this.storageService.items$;
  }

  constructor(
    private httpService: CatalogueItemsService,
    private storageService: CatalogueItemsStorageService,
    private cartService: CartService,
    private toastr: ToastrService,
    private cdRef: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.getItems();
  }

  ngOnDestroy(): void {
    this.storageService.items$.next(null);
  }

  addToCart(id: number): void {
    this.disabledBtn = id;
    this.cartService
      .add(id)
      .pipe(
        finalize(() => {
          this.disabledBtn = undefined;
          this.cdRef.markForCheck();
        }),
        untilDestroyed(this)
      )
      .subscribe({
        next: () => this.toastr.toast('Cart updated', 'success'),
        error: (res) => this.toastr.toast(res.error.error, 'error'),
      });
  }

  private getItems(): void {
    this.loading = true;

    this.httpService
      .getItems()
      .pipe(
        finalize(() => (this.loading = false)),
        untilDestroyed(this)
      )
      .subscribe();
  }
}
