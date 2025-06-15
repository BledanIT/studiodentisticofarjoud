import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-title',
  imports: [CommonModule],
  templateUrl: './title.component.html',
  styleUrl: './title.component.scss'
})
export class TitleComponent {

  @Input() titleType : boolean = false;

  get homeClass() {
    return 'container-fluid align-content-center title-space';
  }

  get defaultClass() {
    return 'container-fluid align-content-center title-space-green';
  }

  get homeTextClass() {
    return 'text-uppercase text-center title-text title-text-big';
  }

  get defaultTextClass() {
    return 'text-uppercase text-center title-text title-text-big title-color-primary';
  }
}
