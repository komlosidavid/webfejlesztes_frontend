import {
  Component,
  OnInit,
  Output,
  Input,
  ElementRef,
  EventEmitter,
} from '@angular/core';
import { AdminService } from 'src/app/admin/admin.service';
import {
  FormGroup,
  FormBuilder,
  FormControl,
  Validators,
} from '@angular/forms';
import { Shoe } from 'src/app/Shoe';
import { BehaviorSubject, tap } from 'rxjs';

@Component({
  selector: 'app-editmodal',
  templateUrl: './editmodal.component.html',
  styleUrls: ['./editmodal.component.css'],
})
export class EditmodalComponent implements OnInit {
  updateForm!: FormGroup;
  shoe!: Shoe;

  @Output()
  close = new EventEmitter();

  @Input()
  id!: number;

  constructor(
    private el: ElementRef,
    private service: AdminService,
    private _fb: FormBuilder
  ) {}

  ngOnInit(): void {
    document.body.appendChild(this.el.nativeElement);
    this.updateForm = this._fb.group({
      brand: new FormControl('', [
        Validators.minLength(3),
        Validators.maxLength(255),
      ]),
      type: new FormControl('', [
        Validators.minLength(3),
        Validators.maxLength(255),
      ]),
      size: new FormControl('', [
        Validators.minLength(2),
        Validators.maxLength(2),
      ]),
      color: new FormControl('', [
        Validators.minLength(3),
        Validators.maxLength(255),
      ]),
      image_url: new FormControl('', [
        Validators.minLength(3),
        Validators.maxLength(255),
      ]),
    });
    this.fetch();
  }

  ngOnDestroy() {
    this.el.nativeElement.remove();
  }

  closeModal() {
    this.close.emit();
  }

  updateShoe() {
    const newShoe = {
      id: this.id,
      brand: this.updateForm.controls['brand'].value,
      type: this.updateForm.controls['type'].value,
      size: this.updateForm.controls['size'].value,
      color: this.updateForm.controls['color'].value,
      image_url: this.updateForm.controls['image_url'].value,
    } as Shoe;
    this.service.updateShoe(newShoe).subscribe(() => {
      this.closeModal();
    });
  }

  fetch() {
    this.service.fetchShoeById(this.id).subscribe((res) => {
      this.shoe = res;
    });
  }
}
