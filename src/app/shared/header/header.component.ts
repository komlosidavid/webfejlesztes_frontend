import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { AuthService } from 'src/app/auth/auth.service';

export interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  password: string;
  role: string;
  created: string;
}

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  signedIn: BehaviorSubject<boolean>;
  user!: User;
  orders: Array<any> = [];

  constructor(private service: AuthService, private router: Router) {
    this.signedIn = this.service.signedIn$;
  }

  ngOnInit() {
    this.service.user$.subscribe((res) => {
      this.user = res;
    });
    //this.service.checkIfTokenIsValid().subscribe();
  }

  logout() {
    this.service.doLogout();
    this.router.navigateByUrl('/');
  }
}
