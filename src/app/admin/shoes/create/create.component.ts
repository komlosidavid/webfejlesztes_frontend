import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { tap } from 'rxjs';
import { AdminService, UploadShoeResponse } from '../../admin.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
})
export class CreateComponent implements OnInit {
  form!: FormGroup;
  error: boolean = false;

  constructor(private _fb: FormBuilder, private adminService: AdminService) {}

  ngOnInit(): void {
    this.form = this._fb.group({
      brand: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(255),
      ]),
      type: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(255),
      ]),
      size: new FormControl('', [
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(2),
      ]),
      color: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(255),
      ]),
      sex: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(255),
      ]),
      price: new FormControl('', [
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(10),
      ]),
      image_url: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(255),
      ]),
    });
  }

  handleFormSubmit() {
    const request = {
      brand: this.form.controls['brand'].value,
      type: this.form.controls['type'].value,
      size: this.form.controls['size'].value,
      color: this.form.controls['color'].value,
      sex: this.form.controls['sex'].value,
      price: this.form.controls['price'].value,
      image_url: this.form.controls['image_url'].value,
    } as UploadShoeResponse;
    this.adminService
      .uploadShoe(request)
      .pipe(
        tap({
          error: (error) => (this.error = true),
        })
      )
      .subscribe();
    this.form.reset();
  }
}
