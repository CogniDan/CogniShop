import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from 'src/app/root-store/app.model';
import { selectCartProducts } from 'src/app/root-store/app.selectors';
import { Product } from '../../../shared/models/product.model';
import { ProductDummyService } from '../../services/product-dummy.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit {
  public products$: Observable<Product[]>;
  public cartId = '';
  public cartItems: any[] = [];

  constructor(
    private store: Store<AppState>,
    private productService: ProductDummyService
  ) {
    this.products$ = this.productService.getDynamicProducts();
    this.store
      .select(selectCartProducts)
      .subscribe((cart) => {
       // this.cartId = cart.id;
       this.cartItems = cart
       console.log(this.cartItems);
      });

  }

  ngOnInit() {
    // console.log(this.cartId);
  }

  productAlreadyAdded(product: Product) : boolean{
    return this.cartItems.find(c => c.id == product.id)?.quantity
  }
  getCurrentlyAddedQuantity(product: Product) : number{
    return this.cartItems.find(c => c.id == product.id)?.quantity
  }
}
