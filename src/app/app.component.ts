import { NgSwitch, NgSwitchCase } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { CompletedComponent } from './components/completed/completed.component';
import { EnterCodeComponent } from './components/enter-code/enter-code.component';
import { EnterDataComponent } from './components/enter-data/enter-data.component';
import { StepsComponent } from './components/steps/steps.component';
import { BackService } from './services/back.service';
import { DataFormInterface } from "./models/data-form.interface";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    StepsComponent,
    EnterCodeComponent,
    NgSwitchCase,
    NgSwitch,
    EnterDataComponent,
    CompletedComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Mamá Viajera';
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
    if (this.step < 3) {
      this.step++;
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
