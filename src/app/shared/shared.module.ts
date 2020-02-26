import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ExponentialPipe } from './pipes/exponential/exponential.pipe';
import { HighlightDirective } from './directives/highlight/highlight.directive';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { MaterialModule } from '@material/material.module';
import { CartComponent } from './components/cart/cart.component'
import { ReactiveFormsModule } from '@angular/forms';
import {AgruparProductosPipe} from './pipes/agrupar/agrupar-productos.pipe';
import { QuicklinkModule } from 'ngx-quicklink';
import { FibonacciPipe } from './pipes/fibonacci.pipe';

@NgModule({
  declarations: [
    ExponentialPipe,
    HighlightDirective,
    HeaderComponent,
    FooterComponent,
    CartComponent,
    AgruparProductosPipe,
    FibonacciPipe,
  ],
  exports: [
    ExponentialPipe,
    HighlightDirective,
    HeaderComponent,
    FooterComponent,
    AgruparProductosPipe,
    FibonacciPipe,
  ],
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule,
    ReactiveFormsModule,
    QuicklinkModule
  ]
})
export class SharedModule { }
