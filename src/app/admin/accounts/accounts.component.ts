import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';
import { BehaviorSubject } from 'rxjs';
import { User } from 'src/app/shared/header/header.component';

@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.css'],
})
export class AccountsComponent implements OnInit {
  accounts = new BehaviorSubject([] as Array<User>);

  constructor(private service: AdminService) {}

  ngOnInit(): void {
    this.service.fetchAllAccounts().subscribe((res) => {
      this.accounts.next(res);
    });
  }
}
