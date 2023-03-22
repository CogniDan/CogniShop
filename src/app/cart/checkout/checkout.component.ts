import { Component } from '@angular/core';
import { FormBuilder, Validators } from "@angular/forms";
import { Store } from '@ngrx/store';
import { checkoutCart } from 'src/app/app.actions';
import { AppState } from 'src/app/app.model';
import { Address } from 'src/app/product/product.model';

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
    this.store.dispatch(checkoutCart({ 
      checkout: {
        email: 'test@cogni.com',
        notes: 'Test checkout',
        shipping: this.addressFromForm(),
        billing: this.addressFromForm()
      }
    }));
  }

  addressFromForm = (): Address => ({
    name: `${this.addressForm.controls.lastName.value}, ${this.addressForm.controls.firstName.value}`,
    line1: this.addressForm.controls.address.value ?? 'Address',
    city: 'City',
    postalCode: '000-0000',
    country: 'Poland'
  })

}
