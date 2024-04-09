import { CommonModule, NgSwitch, NgSwitchCase } from "@angular/common";
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { CompletedComponent } from "./completed/completed.component";
import { EnterCodeComponent } from "./enter-code/enter-code.component";
import { EnterDataComponent } from "./enter-data/enter-data.component";
import { StepsComponent } from "./steps/steps.component";

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
  step = 3;

  onCode(code: string) {
    // @TODO:Send code to server
    this.nextStep();
  }
  nextStep() {
    if (this.step < 3) {
      this.step++;
    }
  }

  onData(data: any) {
    // @TODO:Send data to server
    this.nextStep();
  }
  toFirstStep() {
    this.step = 1;
  }
}
