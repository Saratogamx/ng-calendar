import { Component, OnInit } from '@angular/core';

// Import services
import { ProductService } from './services/product.service';

// Import models
import { IProduct } from './product.model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  title = 'My Products';
  products: IProduct[];

  constructor(private prodService: ProductService) { }

  ngOnInit() {
    this.prodService.getProducts().subscribe(data => this.products = data);
  }

}
