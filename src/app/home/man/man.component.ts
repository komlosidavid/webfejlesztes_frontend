import { Component, OnInit } from '@angular/core';
import { Shoe } from 'src/app/Shoe';
import { HomeService } from '../home.service';

@Component({
  selector: 'app-man',
  templateUrl: './man.component.html',
  styleUrls: ['./man.component.css'],
})
export class ManComponent implements OnInit {
  isLoaded: boolean = false;
  sex: string = 'man';
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
