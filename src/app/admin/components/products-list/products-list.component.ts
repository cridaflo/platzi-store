import { Component, OnInit } from '@angular/core';
import { ProductsService } from '@core/services/products/products.service';
import { Product } from '@core/models/product.model';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {

  products: Product[] = [];
  // displayedColumns: string[] = ['id', 'title', 'price', 'action'];
  displayedColumns: string[] = ['id', 'title', 'price','action'];
  constructor(
    private productsService: ProductsService
  ) { }

  ngOnInit(): void {
    this.fetchProducts();
  }

  fetchProducts(){
    this.productsService.getAllProducts()
    .subscribe(products => {
      this.products = products;
    });
  }

  deleteProduct(id: string) {
     this.productsService.deleteProduct(id)
    .subscribe(ret => {
      if (ret) {
        console.log('lo borro');
        const index = this.products.findIndex(product => product.id === id);
        this.products.splice(index, 1);
         this.products = [...this.products];
      }
      else {
        console.log('flayo');
      }
    });
  }

}
