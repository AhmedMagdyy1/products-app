import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { Products } from '../interfaces/products';


@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private _httpClient:HttpClient) { }


  getProducts(limitNumber:number = 10):Observable<Products>{
    return this._httpClient.get<Products>(`${environment.baseUrl}products?limit=${limitNumber}`)
  }
}
