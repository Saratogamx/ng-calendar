import { Component, OnInit } from '@angular/core';

import { OrderService } from '../ordrers/services/order.service';

// Importing order model
import { IOrder } from './order.model';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent implements OnInit {
  title = 'My Orders';
  toggleDetails = false;
  orders: IOrder[];

  constructor(private orderService: OrderService) { }

  ngOnInit() {
    this.orderService.getOrders().subscribe(data => this.orders = data);
  }

  toggleOrderDetails(event) {
    event.preventDefault();
    this.toggleDetails = !this.toggleDetails;
  }

}
