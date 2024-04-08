import {Component, EventEmitter, Output} from '@angular/core';
import {FormControl, ReactiveFormsModule} from "@angular/forms";

@Component({
  selector: 'app-enter-code',
  standalone: true,
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './enter-code.component.html',
  styleUrl: './enter-code.component.scss'
})
export class EnterCodeComponent {
  @Output() code = new EventEmitter<string>();

  codigo = new FormControl('');
  constructor() {
  }

  next() {
    if (this.codigo.value) {
      this.code.emit(this.codigo.value);
    }
  }
}

