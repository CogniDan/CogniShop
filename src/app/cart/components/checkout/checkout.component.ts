import { Component, OnDestroy } from '@angular/core';
import { FormBuilder, Validators } from "@angular/forms";
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { checkoutCart, emptyCart } from 'src/app/root-store/app.actions';
import { AppState } from 'src/app/root-store/app.model';
import { selectCartProducts } from 'src/app/root-store/app.selectors';
import { Address, Product } from 'src/app/shared/models/product.model';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export default class CheckoutComponent implements OnDestroy {
private listofSubscriptions: Subscription[] = [];
private orderItems: Product[] = [];
  addressForm = this.fb.group({
    firstName: [null, Validators.required],
    lastName: [null, Validators.required],
    address: [null, Validators.required],
  });

  constructor(
    private fb: FormBuilder,
    private store: Store<AppState>) {
      this.store.select(selectCartProducts).subscribe(products => this.orderItems = products );
    }
  ngOnDestroy(): void {
     this.listofSubscriptions.forEach(s => console.log(s));
  }

  checkout = () => {
  //  this.listofSubscriptions.push(this.store.select(selectCartProducts).subscribe(products => 
  //   {
  //     console.log("new item added");
  //     console.log(products);
  //       this.store.dispatch(checkoutCart({ 
  //         checkout: {
  //           email: 'test@cogni.com',
  //           notes: 'Test checkout',
  //           shipping: this.addressFromForm(),
  //           billing: this.addressFromForm(),
  //           products: products
  //         }
  //       }))
  //   }
   
  //   ));

  this.store.dispatch(checkoutCart({ 
            checkout: {
              email: 'test@cogni.com',
              notes: 'Test checkout',
              shipping: this.addressFromForm(),
              billing: this.addressFromForm(),
              products: this.orderItems
            }
          }));
    this.emptyCart();
  }

  emptyCart = () => {
    this.store.dispatch(emptyCart());
  }

  addressFromForm = (): Address => ({
    name: `${this.addressForm.controls.lastName.value}, ${this.addressForm.controls.firstName.value}`,
    line1: this.addressForm.controls.address.value ?? 'Address',
    city: 'City',
    postalCode: '000-0000',
    country: 'Poland'
  })

}
