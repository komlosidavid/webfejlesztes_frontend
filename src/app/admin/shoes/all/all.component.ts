import { Component, OnInit } from '@angular/core';
import { Shoe } from 'src/app/Shoe';
import { AdminService } from '../../admin.service';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-all',
  templateUrl: './all.component.html',
  styleUrls: ['./all.component.css'],
})
export class AllComponent implements OnInit {
  shoes: Array<Shoe> = [];
  isModalOpen: boolean = false;
  isEditModalOpen: boolean = false;
  shoeId!: number;
  isLoaded = new BehaviorSubject(false);

  constructor(private service: AdminService) {}

  ngOnInit(): void {
    this.fetch();
  }

  fetch() {
    this.service.fetchAllShoes().subscribe((res) => {
      this.shoes = res;
      this.isLoaded.next(true);
    });
  }

  openModal(id: number) {
    this.isModalOpen = !this.isModalOpen;
    this.scrollToTop();
    this.shoeId = id;
  }

  closeModal() {
    this.isModalOpen = !this.isModalOpen;
    setTimeout(() => {
      this.fetch();
    }, 500);
  }

  openEditModal(id: number) {
    this.isEditModalOpen = !this.isEditModalOpen;
    this.scrollToTop();
    this.shoeId = id;
  }

  closeEditModal() {
    this.isEditModalOpen = !this.isEditModalOpen;
    setTimeout(() => {
      this.fetch();
    }, 500);
  }

  scrollToTop() {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  }
}
