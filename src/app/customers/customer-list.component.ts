import { Component, OnInit } from '@angular/core';

// Import services
import { CustomerService } from './services/customer.service';

// Import models
import { ICustomer } from './customer.model';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {
  title = 'My Customers';
  customers: ICustomer[];

  constructor(private customerService: CustomerService) { }

  ngOnInit() {
    this.customerService.getCustomers().subscribe(data => this.customers = data);
  }

}
