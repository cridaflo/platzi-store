import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import {ProductsService} from '@core/services/products/products.service';
import {Product} from '@core/models/product.model';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  product: Product;

  constructor(
    private route: ActivatedRoute,
    private productsService: ProductsService
    ) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
        const id = params.id;
        // console.log(id);
        this.fetchProduct(id);
        // this.product = this.productsService.getProduct(id);
        // console.log(this.product);
    });

  }

  fetchProduct(id: string) {
    this.productsService.getProduct(id)
    .subscribe(product => {
        this.product = product;
    });
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
}
