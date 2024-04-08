import {Component, EventEmitter, Output} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule} from "@angular/forms";

@Component({
  selector: 'app-enter-data',
  standalone: true,
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './enter-data.component.html',
  styleUrl: './enter-data.component.scss'
})
export class EnterDataComponent {
  @Output() data = new EventEmitter<any>();

  datos = new FormGroup({
    name: new FormControl(''),

  });
  next() {
    if (this.datos.value) {
      this.data.emit(this.datos.value);
    }
  }
}
