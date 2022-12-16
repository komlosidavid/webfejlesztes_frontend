import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  FormBuilder,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { RegisterRequest } from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  registerForm!: FormGroup;

  constructor(
    private _fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    if (sessionStorage.getItem('access_token')) {
      this.router.navigateByUrl('/');
    } else {
      this.registerForm = this._fb.group({
        name: new FormControl('', [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(255),
        ]),
        username: new FormControl('', [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(255),
        ]),
        email: new FormControl('', [
          Validators.required,
          Validators.minLength(5),
          Validators.maxLength(255),
          Validators.email,
        ]),
        password: new FormControl('', [
          Validators.required,
          Validators.minLength(8),
          Validators.maxLength(255),
        ]),
        confirmPassword: new FormControl('', [
          Validators.required,
          Validators.minLength(8),
          Validators.maxLength(255),
        ]),
      });
    }
  }

  onFormSubmit() {
    const request = {
      username: this.registerForm.controls['username'].value,
      name: this.registerForm.controls['name'].value,
      email: this.registerForm.controls['email'].value,
      password: this.registerForm.controls['password'].value,
    } as RegisterRequest;
    this.authService.register(request);
    this.router.navigateByUrl('/');
  }
}
