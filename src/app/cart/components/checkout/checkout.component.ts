import { Component } from '@angular/core';
import { FormBuilder, Validators } from "@angular/forms";
import { Store } from '@ngrx/store';
import { checkoutCart, emptyCart } from 'src/app/root-store/app.actions';
import { AppState } from 'src/app/root-store/app.model';
import { selectCartProducts } from 'src/app/root-store/app.selectors';
import { Address } from 'src/app/shared/models/product.model';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent {
  addressForm = this.fb.group({
    firstName: [null, Validators.required],
    lastName: [null, Validators.required],
    address: [null, Validators.required],
  });

  constructor(
    private fb: FormBuilder,
    private store: Store<AppState>) {}

  checkout = () => {
    this.store.select(selectCartProducts).subscribe(products => 
      this.store.dispatch(checkoutCart({ 
        checkout: {
          email: 'test@cogni.com',
          notes: 'Test checkout',
          shipping: this.addressFromForm(),
          billing: this.addressFromForm(),
          products: products
        }
      }))
    );
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
