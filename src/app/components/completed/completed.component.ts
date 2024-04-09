import { Component, EventEmitter, Output } from '@angular/core';
import { ReactiveFormsModule } from "@angular/forms";

@Component({
  selector: 'app-completed',
  standalone: true,
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './completed.component.html',
  styleUrl: './completed.component.scss'
})
export class CompletedComponent {
  @Output() firstStep = new EventEmitter<any>();

  toFirstStep() {
    this.firstStep.emit();
  }
}
