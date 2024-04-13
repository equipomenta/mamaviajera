import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

import { DataFormInterface } from '../models/data-form.interface';
import { environment } from '../../environments/environment';
import { UserModel } from "../models/user.model";
import { UserResponseInterface } from "../models/user-response.interface";
@Injectable({
  providedIn: 'root'
})
export class BackApiService {
  apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {
  }

  postCode(code: string): Observable<{isValid: boolean, errors?: {type: string, msg: string, path: string, location: string}[]}> {
    return this.http.post<{isValid: boolean, errors?: {type: string, msg: string, path: string, location: string}[]}>(`${this.apiUrl}/validate-code`, { code });
  }

  postUserData(data: DataFormInterface): Observable<{isUserDataValid: boolean, errors?: {type: string, msg: string, path: string, location: string}[]}> {
    return this.http.post<{isUserDataValid: boolean, errors?: {type: string, msg: string, path: string, location: string}[]}>(`${this.apiUrl}/user-data`, data);
  }

  getIpAddress(): Observable<{ip: string}> {
    return this.http.get<{ip: string}>('https://api.ipify.org/?format=json');
  }
}
