import { Component, Input } from '@angular/core';
import { Product } from './product.model';
import { Store } from '@ngrx/store';
import { addCartItem, deleteCartItem } from '../app.actions';
import { AppState } from '../app.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {
  @Input() 
  canAdd: boolean = true;
  @Input() 
  canDelete: boolean = false;
  @Input() 
  product: Product = {id:'', name: '', description: '', quantity: 0, price: 0};
  @Input() 
  cartId: string = '';

  constructor(
    private store: Store<AppState>) {
    }

  public addProduct = () => {
    this.store.dispatch(addCartItem({ cartId: this.cartId, product: this.product }));
  }
  public deleteProduct = () => {
    this.store.dispatch(deleteCartItem({ cartId: this.cartId, id: this.product.id }));
  }
}
