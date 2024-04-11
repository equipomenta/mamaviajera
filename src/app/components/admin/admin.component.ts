import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { BackService } from "../../services/back.service";
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from "@angular/forms";

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    CommonModule,
    ReactiveFormsModule
  ],
  styleUrl: './admin.component.scss'
})
export class AdminComponent {
  userList = this.backService.getUserList();
  isLoginValid = this.backService.getLoginValid();

  login = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  });

  constructor(
    private backService: BackService
  ) {
    this.backService.getUsers();
  }

  submit() {
    if (this.login.value) {
      this.backService.login(this.login.value);
    }
  }
}
