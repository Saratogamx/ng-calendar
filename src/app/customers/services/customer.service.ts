import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

// Import model
import { ICustomer } from '../customer.model';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor() { }

  getCustomers(): Observable<ICustomer[]> {
    return of(CUSTOMERS);
  }

  getCustomer(id: number): Observable<ICustomer> {
    return of(CUSTOMERS.find(customer => customer.id === id));
  }
}

const CUSTOMERS: ICustomer[] = [
  {
    id: 1,
    firstName: 'John',
    lastName: 'Doe',
    phoneNumber: '52 13331293939',
    email: 'john.doe@gmail.com',
    country: 'United States'
  },
  {
    id: 2,
    firstName: 'Jane',
    lastName: 'Doe',
    phoneNumber: '52 13331293941',
    email: 'jane.doe@gmail.com',
    country: 'Mexico'
  },
  {
    id: 3,
    firstName: 'Sophia',
    lastName: 'Doe',
    phoneNumber: '52 13331293940',
    email: 'sophia.doe@gmail.com',
    country: 'Canada'
  }
];
