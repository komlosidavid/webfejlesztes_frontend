import { Component, OnInit } from '@angular/core';
import { Shoe } from 'src/app/Shoe';
import { HomeService } from '../home.service';

@Component({
  selector: 'app-children',
  templateUrl: './children.component.html',
  styleUrls: ['./children.component.css'],
})
export class ChildrenComponent implements OnInit {
  isLoaded: boolean = false;
  sex: string = 'children';
  shoes!: Array<Shoe>;

  constructor(private service: HomeService) {}

  ngOnInit(): void {
    this.service.getShoesBySex(this.sex).subscribe((res) => {
      this.shoes = res;
      this.isLoaded = !this.isLoaded;
    });
  }

  getShoes(): Array<Shoe> {
    return this.shoes;
  }
}
