import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { finalize } from 'rxjs';
import { TutorialModel } from '../../models/tutorial';
import { TutorialsService } from '../../services/tutorials.service';

@UntilDestroy()
@Component({
  selector: 'pipes-tutorials-item',
  templateUrl: './tutorials-item.component.html',
  styleUrls: ['./tutorials-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TutorialsItemComponent {
  item!: TutorialModel | undefined;
  loading = false;

  get id(): number {
    return +(this.route.snapshot.paramMap.get('id') || 0);
  }

  constructor(
    private itemsService: TutorialsService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.getItem();
  }

  private getItem(): void {
    this.loading = true;

    this.itemsService
      .getItem(this.id)
      .pipe(
        finalize(() => {
          this.loading = false;
        }),
        untilDestroyed(this)
      )
      .subscribe({
        next: (res) => {
          this.item = res;
        },
      });
  }
}
