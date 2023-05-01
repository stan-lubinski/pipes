import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { finalize } from 'rxjs';
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

  constructor(private itemsService: CatalogueItemsService) {}

  ngOnInit(): void {
    this.getItems();
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
