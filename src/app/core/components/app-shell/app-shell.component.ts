import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { initCart } from 'src/app/root-store/app.actions';
import { AppState } from 'src/app/root-store/app.model';

@Component({
  selector: 'app-shell',
  templateUrl: './app-shell.component.html',
  styleUrls: ['./app-shell.component.scss']
})
export class AppShellComponent {

  constructor(
    private store: Store<AppState>
    ) {
  }

  ngOnInit() {
   this.store.dispatch(initCart());
  }
}
