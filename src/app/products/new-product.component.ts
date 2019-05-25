import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.css']
})
export class NewProductComponent implements OnInit {
  keywords: any[] = [];

  constructor() { }

  ngOnInit() {
  }

  onKeyup(event: any) {

    // Key is a comma
    if (event.keyCode === 188 && event.code.toLocaleLowerCase() === 'comma') {
      let keyword = event.target.value;
      keyword = keyword.substring(0, (keyword.length - 1));

      // Adds new keyword into keywords array
      this.keywords.push(keyword.trim());
      event.target.value = '';
    }
  }

  onEnterKey(event: KeyboardEvent) {
    event.preventDefault();

    event.target.value.split(/[ ,]+/)
      .forEach(key => this.keywords.push(key.trim()));
    event.target.value = '';
  }

}
