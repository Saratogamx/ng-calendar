import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { IProduct } from '../product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }

  getProducts(): Observable<IProduct[]> {
    return of(PRODUCTS);
  }

  getProduct(id: number): Observable<IProduct> {
    return of(PRODUCTS.find(prod => prod.id === id));
  }

  create(prod: IProduct): Observable<any> {
    prod.id = (this.getMaxId() + 1);
    PRODUCTS.push(prod);

    return of(prod);
  }

  private getMaxId() {
    const idsArray = PRODUCTS.map(item => +item.id);
    return Math.max.apply(Math, idsArray);
  }
}

const PRODUCTS: IProduct[] = [
  {
    id: 1,
    name: 'iPhone XS',
    brand: 'Apple',
    category: 'Smartphones',
    imageUrl: 'https://dummyimage.com/400x400/000/fff&text=dummy+image',
    url: 'https://dummyimage.com/400x400/000/fff&text=dummy+image',
    keywords: [
      'technology',
      'smartphone',
      'photography'
    ]
  },
  {
    id: 2,
    name: 'MacBook Air',
    brand: 'Apple',
    category: 'PC',
    imageUrl: 'https://dummyimage.com/400x400/000/fff&text=dummy+image',
    url: 'https://dummyimage.com/400x400/000/fff&text=dummy+image',
    keywords: [
      'technology',
      'laptops',
      'productivity'
    ]
  },
  {
    id: 3,
    name: 'Maverick Pro',
    brand: 'DJI',
    category: 'Drones',
    imageUrl: 'https://dummyimage.com/400x400/000/fff&text=dummy+image',
    url: 'https://dummyimage.com/400x400/000/fff&text=dummy+image',
    keywords: [
      'technology',
      'drones',
      'photography'
    ]
  }
];
