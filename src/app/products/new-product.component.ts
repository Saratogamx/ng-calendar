import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { ProductService } from './services/product.service';
import { Router } from '@angular/router';
import { TOASTR_TOKEN, Toastr } from '../common/toastr.service';

@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.css']
})
export class NewProductComponent implements OnInit {
  isDirty: boolean;
  urlRegex = '(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?';
  keywords: any[] = [];
  newProductForm: FormGroup;

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private productService: ProductService,
    @Inject(TOASTR_TOKEN) private toastr: any
  ) { }

  ngOnInit() {
    this.isDirty = true;

    this.newProductForm = this.fb.group({
      name:       ['', Validators.required],
      brand:      ['', Validators.required],
      category:   ['', Validators.required],
      image_url:  ['', [Validators.required, Validators.pattern(this.urlRegex)]],
      url:        ['', [Validators.required, Validators.pattern(this.urlRegex)]]
    });
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

  onEnterKey(event: any) {
    event.preventDefault();

    event.target.value.split(/[ ,]+/)
      .forEach(key => this.keywords.push(key.trim()));
    event.target.value = '';
  }

  deleteKeyword(event) {
    const keyword = event.target.innerText;
    this.keywords.splice(this.keywords.indexOf(keyword), 1);
  }

  saveProduct(): void {
    const values = this.newProductForm.value;

    this.productService.create({
      name: values.name,
      brand: values.brand,
      category: values.category,
      imageUrl: values.image_url,
      url: values.url,
      keywords: this.keywords
    }).subscribe(data => {
      this.isDirty = false;
      this.toastr.success('The Product has been created.');
      setTimeout(() => {
        this.router.navigate(['/products']);
      }, 500);
    });
  }

  cancel(): void {
    this.router.navigate(['/products']);
  }

  fieldIsValid(c: AbstractControl): boolean {
    return (c.touched || c.dirty) && !c.valid;
  }

}
