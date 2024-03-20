import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from  '@angular/common/http';
import { ProductsComponent } from './pages/products/products.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { TrimTextPipe } from './core/pipes/trim-text.pipe';


@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    NotfoundComponent,
    TrimTextPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
