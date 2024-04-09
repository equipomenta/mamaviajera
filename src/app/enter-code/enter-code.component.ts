import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, ReactiveFormsModule, Validators } from "@angular/forms";
import { CommonModule } from "@angular/common";

@Component({
  selector: 'app-enter-code',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  templateUrl: './enter-code.component.html',
  styleUrl: './enter-code.component.scss'
})
export class EnterCodeComponent {
  @Output() code = new EventEmitter<string>();

  codigo = new FormControl(
    '',
    [
      Validators.required,
      Validators.minLength(21),
      Validators.maxLength(21),
      Validators.pattern(/^[a-zA-Z0-9]*$/)
    ]
  );

  next() {
    if (this.codigo.value) {
      this.code.emit(this.codigo.value);
    }
  }
}

