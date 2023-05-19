import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnInit,
} from '@angular/core';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { finalize } from 'rxjs';
import { CartService } from 'src/app/modules/cart/services/cart.service';
import { CatalogueItemModel } from '../../models/catalogue-item';
import { CatalogueItemsService } from '../../services/catalogue-items.service';

@UntilDestroy()
@Component({
  selector: 'pipes-catalogue-items',
  templateUrl: './catalogue-items.component.html',
  styleUrls: ['./catalogue-items.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CatalogueItemsComponent implements OnInit {
  items!: CatalogueItemModel[];
  loading = false;

  constructor(
    private itemsService: CatalogueItemsService,
    private cartService: CartService,
    private cdRef: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.getItems();
  }

  addToCart(id: number): void {
    this.cartService.add(id).pipe(untilDestroyed(this)).subscribe();
  }

  private getItems(): void {
    this.loading = true;

    this.itemsService
      .getItems()
      .pipe(
        finalize(() => {
          this.loading = false;
        }),
        untilDestroyed(this)
      )
      .subscribe({
        next: (res) => {
          this.items = res;
          this.cdRef.markForCheck();
        },
      });
  }
}
