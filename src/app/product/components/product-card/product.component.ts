import { Component, Input } from '@angular/core';
import { Product } from '../../../shared/models/product.model';
import { Store } from '@ngrx/store';
import { addCartItem, deleteCartItem } from '../../../root-store/app.actions';
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
  product: Product = {id: 0, name: '', description: '', quantity: 0, price: 0};

  constructor(
    private store: Store<AppState>) { }

  public addProduct = () => {
    console.log("product")
    console.log(this.product)
    this.store.dispatch(addCartItem({product: this.product }));
  }
  public deleteProduct = () => {
    this.store.dispatch(deleteCartItem({ id: +this.product.id }));
  }
}
