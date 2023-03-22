import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
//import { Observable } from '@apollo/client';
import { map, Observable, of } from 'rxjs';
import { Product } from './product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductDummyService {

  constructor(private http: HttpClient) { }

  public getDynamicProducts(): Observable<Product[]> {
    return this.http.get("https://fakestoreapi.com/products")
      .pipe(
        map((res: any) => {
          return res.map((rec: any) => {
            let p: Product = {
              id: rec.id,
              name: rec.title,
              quantity: rec.rating.count,
              price: Math.ceil(rec.rating.rate),
              description: rec.description,
              images: [rec.image]
            }
            return p;
          })
        })
      );
  }


  public getOrderedItems(): Observable<Product[]> {
    return of(JSON.parse(localStorage.getItem('OrderedItems') ?? '[]') as Product[]);
  }




  public setOrderedItems(products: Product[]): Observable<boolean> {
    return of(localStorage.setItem('OrderedItems', JSON.stringify(products)))
      .pipe(map(x => true));
  }
}
