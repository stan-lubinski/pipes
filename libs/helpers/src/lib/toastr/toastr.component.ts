import { animate, style, transition, trigger } from '@angular/animations';
import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  inject,
  OnInit,
} from '@angular/core';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { ToastComponent } from '@pipes/ui';
import { ToastModel } from './toast.model';
import { ToastrService } from './toastr.service';

@UntilDestroy()
@Component({
  selector: 'pipes-toastr',
  standalone: true,
  imports: [CommonModule, ToastComponent],
  templateUrl: './toastr.component.html',
  styleUrls: ['./toastr.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    trigger('toastEnterLeave', [
      transition(':enter', [
        style({ opacity: 0, transform: 'scale(0)' }),
        animate('0.15s', style({ opacity: '1', transform: 'scale(1)' })),
      ]),
      transition(':leave', [
        style({ opacity: 1, transform: 'translateX(0%)' }),
        animate(
          '0.15s',
          style({ opacity: '0', transform: 'translateX(100%)' })
        ),
      ]),
    ]),
  ],
})
export class ToastrComponent implements OnInit {
  toasts: ToastModel[] = [];
  toastrService = inject(ToastrService);
  cdRef = inject(ChangeDetectorRef);

  ngOnInit(): void {
    this.listenToToasts();
  }

  private listenToToasts(): void {
    this.toastrService.toastEvents.pipe(untilDestroyed(this)).subscribe({
      next: (res) => {
        this.toasts.unshift(new ToastModel(res));
        this.cdRef.markForCheck();

        setTimeout(() => {
          this.toasts.splice(this.toasts.indexOf(res), 1);
          this.cdRef.markForCheck();
        }, 1500);
      },
    });
  }
}
