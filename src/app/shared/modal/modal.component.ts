import {
  Component,
  OnInit,
  ElementRef,
  Input,
  Output,
  EventEmitter,
} from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/admin/admin.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'],
})
export class ModalComponent implements OnInit {
  @Output()
  close = new EventEmitter();

  @Input()
  id!: number;

  constructor(private el: ElementRef, private service: AdminService) {}

  ngOnInit(): void {
    document.body.appendChild(this.el.nativeElement);
  }

  ngOnDestroy() {
    this.el.nativeElement.remove();
  }

  closeModal() {
    this.close.emit();
  }

  deleteShoe() {
    this.service.deleteShoe(this.id).subscribe();
    this.closeModal();
  }
}
