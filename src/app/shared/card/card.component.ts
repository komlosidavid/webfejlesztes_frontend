import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Shoe } from 'src/app/Shoe';
import { AddToCartRequest, CartService } from '../cart/cart.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent {
  @Input()
  shoes!: Array<Shoe>;

  @Input()
  settings: boolean = false;

  constructor(private service: CartService, private router: Router) {}

  addToCart(id: number) {
    if (sessionStorage.getItem('access_token') == null) {
      this.router.navigateByUrl('/login');
    } else {
      this.service.addToCart(id);
    }
  }
}
