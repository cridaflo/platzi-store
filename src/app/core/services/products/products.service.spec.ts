import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing'
import { ProductsService } from './products.service';
import { HttpClient } from '@angular/common/http';
import { environment } from '@environments/environment';

describe('ProductsService', () => {
  let service: ProductsService;
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    httpClient = TestBed.inject(HttpClient);
    httpTestingController = TestBed.inject(HttpTestingController);
    service = TestBed.inject(ProductsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  

  describe('tests for getAllProducts', () => {

    it('should return products', () => {

        //arrange
      const expectData = [
        {
          id: '1',
          title: 't1',
          price: 132131,
          description: 'alsdkfjlakdj',
          image: 'img/img.jpg'
        },
        {
          id: '2',
          title: 't2',
          price: 132131,
          description: 'alsdkfjlakdj',
          image: 'img/img.jpg'
        }
      ];
      let dataError, dataResponse;

      service.getAllProducts()
      .subscribe(response => {
        dataResponse = response;
      }, error => {
        dataError = error;
      });

      const req = httpTestingController.expectOne(`${environment.url_api}/products/`);
      req.flush(expectData);
      //assert
      expect(dataResponse.length).toEqual(2);
      expect(req.request.method).toEqual('GET');
      expect(dataError).toBeUndefined();
    });
  });
});
