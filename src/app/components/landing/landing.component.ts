import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgSwitch, NgSwitchCase } from '@angular/common';

import { CompletedComponent } from '../completed/completed.component';
import { EnterCodeComponent } from '../enter-code/enter-code.component';
import { EnterDataComponent } from '../enter-data/enter-data.component';
import { ResultsComponent } from '../results/results.component';
import { StepsComponent } from '../steps/steps.component';
import { WaitingComponent } from '../waiting/waiting.component';

@Component({
  selector: 'app-landing',
  standalone: true,
    imports: [
      RouterOutlet,
      StepsComponent,
      EnterCodeComponent,
      NgSwitchCase,
      NgSwitch,
      EnterDataComponent,
      CompletedComponent,
      WaitingComponent,
      ResultsComponent
    ],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.scss'
})
export class LandingComponent {
  step = 1;

  constructor() {
  }

  nextStep() {
    if (this.step < 5) {
      this.step++;
    }
  }

  onFirstStep() {
    this.step = 1;
  }
}
