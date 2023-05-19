import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { RouterModule } from '@angular/router';

export interface headerLinkModel {
  route: string;
  name: string;
}

@Component({
  selector: 'pipes-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  standalone: true,
  imports: [RouterModule, CommonModule],
})
export class HeaderComponent {
  @Input() links: headerLinkModel[] = [];
  @Input() title = 'Title';
  @Input() titleRoute = '';
  @Output() toggle = new EventEmitter();

  emitToggle() {
    this.toggle.emit();
  }
}
