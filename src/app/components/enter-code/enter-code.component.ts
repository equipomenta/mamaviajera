import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { BehaviorSubject } from "rxjs";
import { BackService } from "../../services/back.service";

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

  duplicate = false;
  isCodeValid = this.backService.getCodeIsValid();
  codeErrors = this.backService.getCodeErrors();
  codigo = new FormControl(
    '',
    [
      Validators.required,
      Validators.minLength(21),
      Validators.maxLength(21),
      Validators.pattern(/^[a-zA-Z0-9]*$/)
    ]
  );

  constructor(private backService: BackService) {
    this.isCodeValid.subscribe((isValid) => {
      if (isValid === true) {
        this.code.emit();
      } else if (isValid === false) {
        this.duplicate = true;
        setTimeout(() => {
          this.duplicate = false;
        },5000);
      }
    });
  }

  submit() {
    if (this.codigo.value) {
      this.backService.sendCode(this.codigo.value);
    }
  }
}

