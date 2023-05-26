import { animate, style, transition, trigger } from '@angular/animations';
import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  HostBinding,
  Input,
} from '@angular/core';
import { ToastType } from 'libs/helpers/src/lib/toastr/toast.model';

@Component({
  selector: 'pipes-toast',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    trigger('toastEnterLeave', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(100%)' }),
        animate('0.15s', style({ opacity: '1', transform: 'translateY(0%)' })),
      ]),
      transition('* => void', [
        style({ opacity: 1, transform: 'translateX(0%)' }),
        animate(
          '0.15s',
          style({ opacity: '0', transform: 'translateX(100%)' })
        ),
      ]),
    ]),
  ],
})
export class ToastComponent {
  @Input() message = '';
  @Input() type!: ToastType;
  @Input() color!: string | undefined;
  @HostBinding('@toastEnterLeave') toastAnimation = true;
}
