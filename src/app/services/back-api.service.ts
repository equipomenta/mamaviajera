import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DataFormInterface } from "../models/data-form.interface";

@Injectable({
  providedIn: 'root'
})
export class BackApiService {
  apiUrl = 'http://api.gefyfsac.com:25248';
  constructor(private http: HttpClient) {
  }

  postCode(code: string): Observable<{isValid: boolean}> {
    return this.http.post<{isValid: boolean}>(`${this.apiUrl}/validate-code`, { code });
  }

  postUserData(data: DataFormInterface): Observable<{isUserDataValid: boolean}> {
    return this.http.post<{isUserDataValid: boolean}>(`${this.apiUrl}/user-data`, data);
  }
}
