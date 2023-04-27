import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CatalogueItemModel } from '../models/catalogue-item';
import { CatalogueItemsService } from '../services/catalogue-items.service';
import { ActivatedRoute } from '@angular/router';
import { finalize } from 'rxjs';

@Component({
  selector: 'pipes-catalogue-item',
  templateUrl: './catalogue-item.component.html',
  styleUrls: ['./catalogue-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CatalogueItemComponent {
  item!: CatalogueItemModel | undefined;
  loading = false;

  get id(): number {
    return +(this.route.snapshot.paramMap.get('id') || 0)
  }

  constructor(private itemsService: CatalogueItemsService,
              private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.getItem();
  }

  private getItem(): void {
    this.loading = true;
    
    this.itemsService.getItem(this.id).pipe(finalize(() => {
      this.loading = false;
    })).subscribe({next: (res => {
      this.item = res;
    })})
  }
}
