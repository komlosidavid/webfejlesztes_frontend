import { Component, OnInit } from '@angular/core';
import { Shoe } from 'src/app/Shoe';
import { HomeService } from '../home.service';

@Component({
  selector: 'app-woman',
  templateUrl: './woman.component.html',
  styleUrls: ['./woman.component.css'],
})
export class WomanComponent implements OnInit {
  isLoaded: boolean = false;
  sex: string = 'woman';
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
