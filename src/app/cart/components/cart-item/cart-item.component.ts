import { Component, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { deleteCartItem } from 'src/app/root-store/app.actions';
import { AppState } from 'src/app/root-store/app.model';
import { Product } from 'src/app/shared/models/product.model';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss']
})
export class CartItemComponent {
  @Input() 
  product: Product = {id: 0, name: '', description: '', quantity: 0, price: 0};

  constructor(
    private store: Store<AppState>) { }

  public deleteProduct = () => {
    this.store.dispatch(deleteCartItem({ id: +this.product.id }));
  }

}
