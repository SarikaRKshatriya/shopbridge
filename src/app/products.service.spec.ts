import { TestBed, async, inject } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { ProductsService } from './products.service';

describe('ProductsService', () => {
  let service: ProductsService;
  let httpMock: HttpTestingController;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
      ],
      providers: [
        ProductsService
      ],
    });
    httpMock = TestBed.get(HttpTestingController);
    service = TestBed.inject(ProductsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it(`should fetch admin details`, async(inject([HttpTestingController, ProductsService],
    (httpClient: HttpTestingController, postService: ProductsService) => {
    let req = httpMock.expectOne('http://localhost:3000/api/admin');
    expect(req.request.method).toBe("GET");
    })));
    it(`should fetch products details`, async(inject([HttpTestingController, ProductsService],
      (httpClient: HttpTestingController, postService: ProductsService) => {
      let req = httpMock.expectOne('http://localhost:3000/api/products');
      expect(req.request.method).toBe("GET");
      })));
      it(`should fetch users details`, async(inject([HttpTestingController, ProductsService],
        (httpClient: HttpTestingController, postService: ProductsService) => {
        let req = httpMock.expectOne('http://localhost:3000/api/users');
        expect(req.request.method).toBe("GET");
        })));
        it(`should fetch cart details`, async(inject([HttpTestingController, ProductsService],
          (httpClient: HttpTestingController, postService: ProductsService) => {
          let req = httpMock.expectOne('http://localhost:3000/api/cart');
          expect(req.request.method).toBe("GET");
          })));
          it(`should fetch wishlist details`, async(inject([HttpTestingController, ProductsService],
            (httpClient: HttpTestingController, postService: ProductsService) => {
            let req = httpMock.expectOne('http://localhost:3000/api/wishlist');
            expect(req.request.method).toBe("GET");
            })));
});

