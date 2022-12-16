import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';
import { User } from '../header/header.component';
import { CartService } from './cart.service';
import { map, BehaviorSubject } from 'rxjs';
import { Shoe } from 'src/app/Shoe';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  shoes = new BehaviorSubject([] as Array<Shoe>);
  user = new BehaviorSubject({} as User);

  constructor(
    private service: CartService,
    private routerActive: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    if (sessionStorage.getItem('access_token') == null) {
      this.router.navigateByUrl('/login');
    } else {
      this.fetchShoes();
    }
  }

  getUserByHistoryRoute() {
    this.routerActive.paramMap
      .pipe(map(() => window.history.state))
      .subscribe((res) => {
        this.user.next(res);
      });
  }

  fetchShoes() {
    this.getUserByHistoryRoute();
    this.service.fetchShoes(this.user.value).subscribe((res) => {
      this.shoes.next(res);
    });
  }
}
