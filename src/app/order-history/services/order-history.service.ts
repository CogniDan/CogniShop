import { Injectable } from "@angular/core";
import { of } from "rxjs";
import { Order } from "src/app/shared/models/order.model";

@Injectable(
    {
        providedIn: 'root'
    }
)
export class OrdersService {

    public getOrders(){
        return of(orders)
    }
}

const orders: Order[] = [{
id: 'sddl2',
userName: 'ahmed',
address: 'testuy',
totalPrice: 32,
items: []
}]