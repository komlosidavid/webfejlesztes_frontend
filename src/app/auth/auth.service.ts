import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, tap, map } from 'rxjs';
import { User } from '../shared/header/header.component';

export interface RegisterRequest {
  username: string;
  email: string;
  name: string;
  password: string;
}

export interface LoginRequest {
  username: string;
  password: string;
}

interface TokenResponse {
  accessToken: string;
  tokenType: string;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  url: string = 'http://localhost:8080/api/';
  signedIn$ = new BehaviorSubject(false);
  user$ = new BehaviorSubject({} as User);
  constructor(private http: HttpClient) {}

  register(data: RegisterRequest) {
    this.http
      .post<TokenResponse>(this.url + 'auth/register', data)
      .pipe(
        tap(() => {
          this.signedIn$.next(true);
        })
      )
      .subscribe((res) => {
        sessionStorage.setItem('access_token', res.accessToken);
        this.getSignedInUser();
      });
  }

  checkIfTokenIsValid() {
    let token = sessionStorage.getItem('access_token');
    return this.http.post<boolean>(this.url + `auth/checktoken`, token).pipe(
      tap((res) => {
        if (res == true) {
          this.signedIn$.next(true);
        }
      })
    );
  }

  signIn(data: LoginRequest) {
    this.http
      .post<TokenResponse>(this.url + 'auth/login', data)
      .pipe(
        tap(() => {
          this.signedIn$.next(true);
        })
      )
      .subscribe((res: TokenResponse) => {
        sessionStorage.setItem('access_token', res.accessToken);
        this.getSignedInUser();
      });
  }

  getSignedInUser() {
    let token = sessionStorage.getItem('access_token');
    this.http
      .get<User>(this.url + 'auth/getuserbytoken?token=' + token)
      .pipe(
        tap((res) => {
          this.user$.next(res);
        })
      )
      .subscribe((res) => {});
  }

  doLogout() {
    sessionStorage.removeItem('access_token');
    this.signedIn$.next(false);
  }
}
