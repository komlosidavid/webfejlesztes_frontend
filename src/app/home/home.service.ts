import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Shoe } from '../Shoe';

@Injectable({
  providedIn: 'root',
})
export class HomeService {
  url: string = 'http://localhost:8080/api/home';

  constructor(private http: HttpClient) {}

  getShoesBySex(sex: string) {
    return this.http.get<Array<Shoe>>(this.url + '/getshoesbysex?sex=' + sex);
  }
}
