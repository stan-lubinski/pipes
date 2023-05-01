import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { finalize } from 'rxjs';
import { TutorialModel } from '../../models/tutorial';
import { TutorialsService } from '../../services/tutorials.service';

@Component({
  selector: 'pipes-tutorials-items',
  templateUrl: './tutorials-items.component.html',
  styleUrls: ['./tutorials-items.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TutorialsItemsComponent implements OnInit {
  items!: TutorialModel[];
  loading = false;

  constructor(private itemsService: TutorialsService) {}

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
