import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgSwitch, NgSwitchCase } from '@angular/common';

import { CompletedComponent } from '../completed/completed.component';
import { EnterCodeComponent } from '../enter-code/enter-code.component';
import { EnterDataComponent } from '../enter-data/enter-data.component';
import { ResultsComponent } from '../results/results.component';
import { StepsComponent } from '../steps/steps.component';
import { WaitingComponent } from '../waiting/waiting.component';
import { BackService } from '../../services/back.service';
import { DataFormInterface } from '../../models/data-form.interface';

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
  isCodeValid = this.backService.getCodeIsValid();
  isUserDataValid = this.backService.getUserDataIsValid();

  constructor(private backService: BackService) {
    this.isCodeValid.subscribe((isValid) => {
      if (isValid) {
        this.nextStep();
      } else {
        // @TODO:Show error message
      }
    });
    this.isUserDataValid.subscribe((isValid) => {
      if (isValid) {
        this.nextStep();
      } else {
        // @TODO:Show error message
      }
    });
  }

  onCode(code: string) {
    this.backService.sendCode(code);
  }

  nextStep() {
    if (this.step < 5) {
      this.step++;
    }
  }

  prevStep() {
    if (this.step > 1) {
      this.step--;
    }
  }

  onData(data: DataFormInterface) {
    this.backService.sendUserData(data);
  }

  onFirstStep() {
    this.toFirstStep();
  }

  toFirstStep() {
    this.step = 1;
  }
}
