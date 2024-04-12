import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

import { BackService } from '../../services/back.service';
import { DataFormInterface } from "../../models/data-form.interface";

@Component({
  selector: 'app-enter-data',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  templateUrl: './enter-data.component.html',
  styleUrl: './enter-data.component.scss'
})
export class EnterDataComponent {
  @Output() data = new EventEmitter<any>();

  isUserDataValid = this.backService.getUserDataIsValid();
  userDataErrors = this.backService.getUserDataErrors();
  datos = new FormGroup({
    name: new FormControl('', [Validators.required]),
    dni: new FormControl(
      '',
      [
        Validators.required,
        Validators.minLength(8),
        Validators.maxLength(8),
        Validators.pattern(/^[0-9]*$/)
      ]
    ),
    phone: new FormControl(
      '',
      [
        Validators.required,
        Validators.maxLength(9),
        Validators.pattern(/^[0-9]*$/)
      ]
    ),
    email: new FormControl(
      '',
      [
        Validators.required,
        Validators.email
      ]
    ),
    address: new FormControl('', [Validators.required]),
    state: new FormControl('', [Validators.required]),
    city: new FormControl('', [Validators.required]),
    acceptTerms: new FormControl(false, [Validators.requiredTrue]),
    acceptPrivacy: new FormControl(false, [Validators.requiredTrue])
  });

  constructor(private backService: BackService) {
    this.isUserDataValid.subscribe((isValid) => {
      if (isValid === true) {
        this.data.emit(this.datos.value);
      } else if (isValid === false) {
        setTimeout(() => {
          this.backService.setUserDataErrors([]);
        },5000);
      }
    });
    this.backService.fetchIpAddress();
  }
  submit() {
    if (this.datos.value) {
      this.backService.sendUserData(this.datos.value as DataFormInterface);
    }
  }
}
