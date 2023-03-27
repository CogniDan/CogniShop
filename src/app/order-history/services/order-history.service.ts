import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, of } from 'rxjs';
import { Order } from 'src/app/shared/models/order.model';

@Injectable({
  providedIn: 'root',
})
export class OrdersHistoryService {
  constructor(private http: HttpClient) {}
  public getOrders(): Observable<Order[]> {
    return this.http
      .get(
        'https://cogecommercefakeapis-default-rtdb.firebaseio.com/orders.json'
      )
      .pipe(
        map((res: any) => {
          return res.map((or: any) => {
            let o: Order = {
              id: or.id,
              userName: or.userName,
              address: or.address,
              items: or.items,
              totalPrice: 12,
            };
            return o;
          });
        })
      );
  }
}

const orders: Order[] = [
  {
    id: 'sddl2',
    userName: 'ahmed',
    address: 'testuy',
    totalPrice: 32,
    items: [],
  },
];
