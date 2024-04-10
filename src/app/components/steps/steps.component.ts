import {NgIf} from '@angular/common';
import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-steps',
  standalone: true,
  imports: [
    NgIf
  ],
  templateUrl: './steps.component.html',
  styleUrl: './steps.component.scss'
})
export class StepsComponent {
  @Input() step = 1;

  constructor() {
  }
}
