import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormControl,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService, LoginRequest } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;

  constructor(
    private _fb: FormBuilder,
    private service: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    if (sessionStorage.getItem('access_token')) {
      this.router.navigateByUrl('/');
    } else {
      this.loginForm = this._fb.group({
        username: new FormControl('', [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(255),
        ]),
        password: new FormControl('', [
          Validators.required,
          Validators.minLength(8),
          Validators.maxLength(255),
        ]),
      });
    }
  }

  onFormSubmit() {
    const request = {
      username: this.loginForm.controls['username'].value,
      password: this.loginForm.controls['password'].value,
    } as LoginRequest;
    this.service.signIn(request);
    this.router.navigateByUrl('/');
  }
}
