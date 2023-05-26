import {
  ChangeDetectionStrategy,
  Component,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
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
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.getItem();
  }

  ngOnDestroy(): void {
    this.storageService.item$.next(null);
  }

  addToCart(): void {
    this.disableAddBtn = true;
    this.cartService
      .add(this.id)
      .pipe(
        finalize(() => (this.disableAddBtn = false)),
        untilDestroyed(this)
      )
      .subscribe({ next: () => {}, error: (err) => {} }); // TODO: add toasts
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
