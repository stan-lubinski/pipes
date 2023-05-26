import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'pipes-purchase-complete',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './purchase-complete.component.html',
  styleUrls: ['./purchase-complete.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PurchaseCompleteComponent {}
