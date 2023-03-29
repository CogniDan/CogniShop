import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, of, tap } from 'rxjs';
import { Product } from '../../shared/models/product.model';

@Injectable({
  providedIn: 'root',
})
export class ProductDummyService {
  constructor(private http: HttpClient) {}

  public getDynamicProducts(): Observable<Product[]> {
    return this.http
      .get(
        'https://cogecommercefakeapis-default-rtdb.firebaseio.com/products.json'
      )
      .pipe(
        map((res: any) => {
          return res.map((rec: any) => {
            let p: Product = {
              id: rec.id,
              name: rec.title,
              quantity: 10,
              price: Math.ceil(rec.price),
              description: rec.description,
              images: [ rec.image ],
            };
            return p;
          });
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

  public getOrders(): Observable<Product[]> {
    return this.http
      .get(
        'https://cogecommercefakeapis-default-rtdb.firebaseio.com/orders.json'
      )
      .pipe(
        map((res: any) => {
          return JSON.parse(res).map((rec: any) => {
            let p: Product = {
              id: rec.Id,
              name: rec.title,
              quantity: rec.quantity,
              price: rec.price,
              description: rec.description,
              images: rec.images,
            };
            return p;
          });
        })
      );
  }

  public addOrders(products: Product[]): Observable<Product[]> {
    return this.http
      .post(
        'https://cogecommercefakeapis-default-rtdb.firebaseio.com/orders.json',
        {
          products
        }
      )
      .pipe(
        tap((res: any) => console.log(res))
      );
  }
}