import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { finalize } from 'rxjs';
import { CartService } from 'src/app/modules/cart/services/cart.service';
import { CatalogueItemModel } from '../../models/catalogue-item';
import { CatalogueItemsService } from '../../services/catalogue-items.service';

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
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getItems();
  }

  addToCart(id: number): void {
    if (!this.cartService.items.find((el) => el.id === id)) {
      this.cartService.add(id);
    }
    this.router.navigate(['/cart']);
  }

  private getItems(): void {
    this.loading = true;

    this.itemsService
      .getItems()
      .pipe(
        finalize(() => {
          this.loading = false;
        })
      )
      .subscribe({
        next: (res) => {
          this.items = res;
        },
      });
  }
}
