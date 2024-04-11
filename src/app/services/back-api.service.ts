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

  postCode(code: string): Observable<{isValid: boolean}> {
    return this.http.post<{isValid: boolean}>(`${this.apiUrl}/validate-code`, { code });
  }

  postUserData(data: DataFormInterface): Observable<{isUserDataValid: boolean}> {
    return this.http.post<{isUserDataValid: boolean}>(`${this.apiUrl}/user-data`, data);
  }

  getUsers(): Observable<UserModel[]> {
    return this.http.get<UserResponseInterface[]>(`${this.apiUrl}/users`).pipe(
      map((users) => users.map((user) => new UserModel(user)))
    );
  }

  login(data: Partial<{username: string | null, password: string | null}>): Observable<{token: boolean}> {
    return this.http.post<{token: boolean}>(`${this.apiUrl}/login`, data);
  }
}
