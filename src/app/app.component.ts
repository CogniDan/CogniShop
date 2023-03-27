import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Actions, createEffect, ofType } from '@ngrx/effects';
//import { initCart } from './app.actions';
import { AppState } from './root-store/app.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'CogniShop';

  constructor(
    private actions$: Actions,
    // private store: Store<AppState>
    ) {
  }

  ngOnInit() {
    this.actions$.subscribe(v => {
      console.log('Actions')
      console.log(v)
    })
//    this.store.dispatch(initCart());
  }
}
