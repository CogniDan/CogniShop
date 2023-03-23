import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from 'src/app/root-store/app.model';
import { selectCartTotalProductsNumber } from 'src/app/root-store/app.selectors';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  cartTotalCount$: Observable<number>;

  constructor(
    private store: Store<AppState>
  ) {
    this.cartTotalCount$ = this.store.select(selectCartTotalProductsNumber);
  }
}
