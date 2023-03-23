import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { AppState } from "src/app/root-store/app.model";
import { Product } from "../../../shared/models/product.model";
import { ProductDummyService } from "../../services/product-dummy.service";

@Component({
    selector: 'app-product-list',
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.scss']
  })
  export class ProductListComponent implements OnInit {
  
    public products$: Observable<Product[]>;
    public cartId = '';
  
    constructor(
      private store: Store<AppState>,
      private productService: ProductDummyService
    ) {
      this.products$ = this.productService.getDynamicProducts();
      this.store.select(state => state.cart.id).subscribe(id => this.cartId = id);
    }
    
    ngOnInit() {
    }
  }