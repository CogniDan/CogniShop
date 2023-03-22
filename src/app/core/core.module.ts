import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { ProductModule } from '../product/product.module';
import { AppShellComponent } from './components/app-shell/app-shell.component';
import { CoreRoutingModule } from './core-routing.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AppShellComponent,
  ],
  imports: [
    CommonModule,
    ProductModule,
    CoreRoutingModule,
    SharedModule,
  ],
  exports: [AppShellComponent, CoreRoutingModule],
})
export class CoreModule {}
