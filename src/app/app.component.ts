import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {StepsComponent} from "./steps/steps.component";
import {EnterCodeComponent} from "./enter-code/enter-code.component";
import {NgSwitch, NgSwitchCase} from "@angular/common";
import {EnterDataComponent} from "./enter-data/enter-data.component";
import {CompletedComponent} from "./completed/completed.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, StepsComponent, EnterCodeComponent, NgSwitchCase, NgSwitch, EnterDataComponent, CompletedComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Mamá Viajera';
  step = 1;
  constructor() {
  }

  nextStep(code: string) {
    if (this.step < 3) {
      this.step++;
      console.log('Emmitted Code: ' + code);
    }
  }

  prevStep() {
    if (this.step > 1) {
      this.step--;
    }
  }
}
