import { Injectable } from '@angular/core';
import { BackApiService } from "./back-api.service";
import { BehaviorSubject } from "rxjs";
import { DataFormInterface } from "../models/data-form.interface";

@Injectable({
  providedIn: 'root'
})
export class BackService {
  private codeIsValid = new BehaviorSubject<boolean>(false);
  private userDataIsValid = new BehaviorSubject<boolean>(false);
  private code = '';

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
}
