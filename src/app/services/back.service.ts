import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { BackApiService } from './back-api.service';
import { DataFormInterface } from '../models/data-form.interface';
import { UserModel } from "../models/user.model";

@Injectable({
  providedIn: 'root'
})
export class BackService {
  private codeIsValid = new BehaviorSubject<boolean>(false);
  private userDataIsValid = new BehaviorSubject<boolean>(false);
  private userList = new BehaviorSubject<UserModel[]>([]);
  private code = '';
  private isLoginValid = new BehaviorSubject<boolean>(false);


  constructor(private backApiService: BackApiService) {
  }

  getCodeIsValid() {
    return this.codeIsValid.asObservable();
  }

  setCodeIsValid(valid: boolean): void {
    this.codeIsValid.next(valid);
  }

  getUserDataIsValid() {
    return this.userDataIsValid.asObservable();
  }

  getUserList() {
    return this.userList.asObservable();
  }

  setUserList(users: UserModel[]): void {
    this.userList.next(users);
  }

  setUserDataIsValid(isValid: boolean): void {
    this.userDataIsValid.next(isValid);
  }

  getLoginValid() {
    return this.isLoginValid.asObservable();
  }

  setLoginValid(valid: boolean): void {
    this.isLoginValid.next(valid);
  }

  sendCode(code: string): void {
    this.code = code;
    this.backApiService
      .postCode(code)
      .subscribe((res) =>
      this.setCodeIsValid(res.isValid)
    );
  }
  sendUserData(data: DataFormInterface): void {
    data = { ...data, code: this.code };
    this.backApiService
      .postUserData(data)
      .subscribe((res) => {
        this.setUserDataIsValid(res.isUserDataValid)
        this.code = '';
      }
    );
  }

  getUsers(): void {
    this.backApiService
      .getUsers()
      .subscribe((res) => {
        this.setUserList(res);
      });
  }

  login(login: Partial<{ username: string | null, password: string | null }>): void {
    this.backApiService
      .login(login)
      .subscribe((res) => {
        this.setLoginValid(res.token)
      });
  }
}
