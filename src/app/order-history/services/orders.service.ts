import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, of, switchMap } from 'rxjs';
import { Order } from 'src/app/shared/models/order.model';
import { OrdersHistoryService } from './order-history.service';

@Injectable({
  providedIn: 'root',
})
export class OrdersService {
  constructor(
    private http: HttpClient,
    private ordersHistory: OrdersHistoryService
  ) {}
  public addOrder(order: Order) {

    return this.ordersHistory.getOrders().pipe(
      switchMap((res) => {
         res.push(order);
        return this.http.put(
          'https://cogecommercefakeapis-default-rtdb.firebaseio.com/orders.json',
          res
        );
      })
    );
  }
}
// const orders: Order[] = [
//   {
//     id: 'sddl2',
//     userName: 'ahmed',
//     address: 'testuy',
//     totalPrice: 32,
//     items: [],
//   },
// ];
