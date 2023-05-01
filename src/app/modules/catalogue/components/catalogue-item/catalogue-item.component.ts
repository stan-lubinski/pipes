import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { finalize } from 'rxjs';
import { CartService } from 'src/app/modules/cart/services/cart.service';
import { CatalogueItemModel } from '../../models/catalogue-item';
import { CatalogueItemsService } from '../../services/catalogue-items.service';

@Component({
  selector: 'pipes-catalogue-item',
  templateUrl: './catalogue-item.component.html',
  styleUrls: ['./catalogue-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CatalogueItemComponent implements OnInit {
  item!: CatalogueItemModel | undefined;
  loading = false;

  get id(): number {
    return +(this.route.snapshot.paramMap.get('id') || 0);
  }

  constructor(
    private itemsService: CatalogueItemsService,
    private cartService: CartService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.getItem();
  }

  addToCart(): void {
    this.cartService.add(this.id);
  }

  private getItem(): void {
    this.loading = true;

    this.itemsService
      .getItem(this.id)
      .pipe(
        finalize(() => {
          this.loading = false;
        })
      )
      .subscribe({
        next: (res) => {
          this.item = res;
        },
      });
  }
}
