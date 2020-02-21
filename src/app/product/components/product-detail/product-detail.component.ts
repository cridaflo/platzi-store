import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ProductsService } from '@core/services/products/products.service';
import { Product } from '@core/models/product.model';
import { switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { saveAs } from 'file-saver';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  product$: Observable<Product>;

  constructor(
    private route: ActivatedRoute,
    private productsService: ProductsService
    ) { }

  ngOnInit(): void {
   this.product$ = this.route.params
    .pipe(
      switchMap((params: Params) =>{
        return this.productsService.getProduct(params.id);
      })
    );
  }


  createProduct() {
      const newProduct: Product = {
        id: '6',
        image: 'assets/images/stickers2.png',
        title: 'Stickers',
        price: 80000,
        description: 'bla bla bla bla bla'
      };
      this.productsService.createProduct(newProduct)
    .subscribe(product => {
      console.log(product);
    });
  }

  updateProduct() {
    const editProduct: Partial<Product> = {
      price: 5555555,
      description: 'edición titulo'
    };
    this.productsService.updateProduct('2', editProduct)
    .subscribe(product => {
      console.log(product);
    });
  }

  deleteProduct(){
    const id: string = 'sdf';
    this.productsService.deleteProduct(id).subscribe( resp => {
      console.log(resp);
    });
  }

  getRandomUser(){
    this.productsService.gerRandomUser()
    .subscribe(
      users => { //Todo sale bien
      console.log(users);
    },
    error => {
      console.error(error);
    }
    );
  }

  getFile(){
    this.productsService.getFile()
    .subscribe( content => {
      const blob = new Blob([content], {type: 'text'});
      saveAs(blob, 'prueba.txt');
    });
  }
}
