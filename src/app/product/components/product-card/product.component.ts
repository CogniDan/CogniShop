import { Component, Input } from '@angular/core';
import { Product } from '../../../shared/models/product.model';
import { Store } from '@ngrx/store';
import { addCartItem, decrementCartItemQuantity, deleteCartItem, incrementCartItemQuantity } from '../../../root-store/app.actions';
import { AppState } from '../../../root-store/app.model';

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
  currentlyAddedQuantity: number = 0;
  @Input() 
  product: Product = {id: 0, name: '', description: '', quantity: 0, price: 0};

  constructor(
    private store: Store<AppState>) { }

  public addProduct = () => {
    this.store.dispatch(addCartItem({product: {
        ...this.product,
        quantity: 1,
      } 
    }));
    this.canAdd = false;
  }
  public deleteProduct = () => {
    this.store.dispatch(deleteCartItem({ id: +this.product.id }));
    this.canAdd = true;
  }
  public updateQuantity = (quantity: number) => {
    if (quantity <= 0) {
      this.store.dispatch(deleteCartItem({ id: this.product.id }));
      this.canAdd = true;
      return;
    }
    if (quantity < this.product.quantity) {
      this.store.dispatch(decrementCartItemQuantity({ product: this.product, by: this.currentlyAddedQuantity - quantity }));
    } else {
      this.store.dispatch(incrementCartItemQuantity({ product: this.product, by: quantity - this.currentlyAddedQuantity }));
    }
  }
}
