import { Component, Input } from '@angular/core';
import { Order } from 'src/app/shared/models/order.model';

@Component({
  selector: 'app-order-detail',
  templateUrl: './order-detail.component.html',
  styleUrls: ['./order-detail.component.scss'],
})
export class OrderDetailComponent {
  @Input()
  order?: Order = undefined;
  
}
