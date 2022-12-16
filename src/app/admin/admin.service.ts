import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../shared/header/header.component';
import { Shoe } from '../Shoe';

interface UploadShoeRequest {
  brand: string;
  type: string;
  size: string;
  color: string;
  sex: string;
  price: number;
  image_url: string;
}

export interface UploadShoeResponse {
  id: number;
  brand: string;
  type: string;
  size: string;
  color: string;
  sex: string;
  price: number;
  image_url: string;
}

interface GetShoeResponse {
  id: string;
  brand: string;
  type: string;
  size: string;
  color: string;
  sex: string;
  price: number;
  image_url: string;
}

@Injectable({
  providedIn: 'root',
})
export class AdminService {
  url: string = 'http://localhost:8080/api/admin';

  constructor(private http: HttpClient) {}

  uploadShoe(data: UploadShoeRequest) {
    return this.http.post(this.url + '/createshoe', data);
  }

  fetchAllShoes() {
    return this.http.get<Array<Shoe>>(
      'http://localhost:8080/api/home/getallshoes'
    );
  }

  deleteShoe(id: number) {
    return this.http.delete(this.url + `/deleteshoe?id=${id}`);
  }

  fetchShoeById(id: number) {
    return this.http.get<Shoe>(
      `http://localhost:8080/api/home/getshoe?id=${id}`
    );
  }

  fetchAllAccounts() {
    return this.http.get<Array<User>>(this.url + '/getallaccounts');
  }

  updateShoe(shoe: Shoe) {
    return this.http.put<Shoe>(this.url + '/updateshoe', shoe);
  }
}
