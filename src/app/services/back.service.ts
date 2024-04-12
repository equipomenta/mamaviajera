import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { BackApiService } from './back-api.service';
import { DataFormInterface } from '../models/data-form.interface';
import { UserModel } from "../models/user.model";

@Injectable({
  providedIn: 'root'
})
export class BackService {
  private codeIsValid = new BehaviorSubject<boolean | undefined>(undefined);
  private userDataIsValid = new BehaviorSubject<boolean | undefined>(undefined);
  private userDataErrors = new BehaviorSubject<{type: string, msg: string, path: string, location: string}[]>([]);
  private codeErrors = new BehaviorSubject<{type: string, msg: string, path: string, location: string}[]>([]);
  private code = '';
  private ipAddress = '';

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

  setUserDataIsValid(isValid: boolean): void {
    this.userDataIsValid.next(isValid);
  }

  getUserDataErrors() {
    return this.userDataErrors.asObservable();
  }
  setUserDataErrors(errors: {type: string, msg: string, path: string, location: string}[]): void {
    this.userDataErrors.next(errors);
  }
  getCodeErrors() {
    return this.codeErrors.asObservable();
  }
  setCodeErrors(errors: {type: string, msg: string, path: string, location: string}[]): void {
    this.codeErrors.next(errors);
  }

  sendCode(code: string): void {
    this.code = code;
    this.backApiService
      .postCode(code)
      .subscribe((res) => {
        if (res.errors) {
          this.setCodeErrors(res.errors);
          setTimeout(() => {
            this.setCodeErrors([]);
          },5000);
        } else {
          this.setCodeIsValid(res.isValid);
        }
      });
  }

  sendUserData(data: DataFormInterface): void {
    data = { ...data, code: this.code, ip: this.ipAddress };
    this.backApiService
      .postUserData(data)
      .subscribe((res) => {
        if (res.errors) {
          this.setUserDataErrors(res.errors);
          setTimeout(() => {
            this.setUserDataErrors([]);
          },5000);
        } else {
          this.setUserDataIsValid(res.isUserDataValid);
        }
        this.code = '';
        this.ipAddress = '';
      }
    );
  }

  fetchIpAddress(): void {
    this.backApiService
      .getIpAddress()
      .subscribe((res) => {
        this.ipAddress = res.ip;
      });
  }
}
