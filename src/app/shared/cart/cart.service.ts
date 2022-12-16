import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Shoe } from 'src/app/Shoe';
import { User } from '../header/header.component';
import { BehaviorSubject, tap } from 'rxjs';
import { Route, Router } from '@angular/router';
import { ThisReceiver } from '@angular/compiler';

export interface AddToCartRequest {
  userId: number;
  shoeId: number;
}

@Injectable({
  providedIn: 'root',
})
export class CartService {
  user = new BehaviorSubject({} as User);

  constructor(private http: HttpClient, private router: Router) {}

  fetchShoes(user: User) {
    this.user.next(user as User);
    return this.http.get<Array<Shoe>>(
      `http://localhost:8080/api/orders/getshoes?id=${this.user.value.id}`
    );
  }

  addToCart(id: number) {
    let token = sessionStorage.getItem('access_token');
    let uid = 0;
    this.http
      .get<User>(`http://localhost:8080/api/auth/getuserbytoken?token=${token}`)
      .subscribe((res) => {
        const request = {
          userId: res.id,
          shoeId: id,
        } as AddToCartRequest;
        this.http
          .post<string>('http://localhost:8080/api/orders/addorder', request)
          .subscribe();
      });
  }
}
