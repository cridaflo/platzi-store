import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '@core/models/product.model';
import { Observable, from } from 'rxjs';

@Pipe({
  name: 'agruparProductos'
})
export class AgruparProductosPipe implements PipeTransform {

  productsCount= [];

  // transform(products: Product[]): any {
  //   const newProduct: Product = {
  //     id: '6',
  //     title: 'stickers 2',
  //     image: 'assets/images/stickers2.png',
  //     price: 3000,
  //     description: 'Stickers que borré'
  //   };
  transform(products: Product[]): any {
    products.forEach( product => {
      const index = this.productsCount.findIndex(prod => product.id === prod.prod.id);
      if (index < 0){
        this.productsCount.push({
          prod: product,
          count: 1
        });
      }
      else{
        this.productsCount[index].count+=1;
      }
    });

    return this.productsCount;
  }

}
