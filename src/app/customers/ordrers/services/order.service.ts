import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { IOrder } from '../../orders/order.model';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor() { }

  getOrders(): Observable<IOrder[]> {
    return of(ORDERS);
  }

  getOrder(id: number): Observable<IOrder> {
    return of(ORDERS.find(order => order.id === id));
  }
}

const ORDERS: IOrder[] = [
  {
    id: 1,
    date: new Date(),
    customerId: 1,
    customer: {
      id: 1,
      firstName: 'John',
      lastName: 'Doe',
      phoneNumber: '52 13331293939',
      email: 'john.doe@gmail.com',
      country: 'United States'
    },
    details: [
      {
        id: 1,
        quantity: 1,
        productId: 1,
        product: [
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
          }
        ]
      }
    ]
  }
]
