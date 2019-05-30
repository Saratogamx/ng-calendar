import { Component, OnInit, Inject } from '@angular/core';
import { Router } from '@angular/router';

// Importing models
import { ICountry } from '../common/country.model';

// Importing services
import { CountryService } from '../common/country.service';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { CustomerService } from './services/customer.service';
import { TOASTR_TOKEN, Toastr } from '../common/toastr.service';

@Component({
  selector: 'app-new-customer',
  templateUrl: './new-customer.component.html',
  styleUrls: ['./new-customer.component.css']
})
export class NewCustomerComponent implements OnInit {
  isDirty: boolean;
  countries: ICountry[];
  newCustomerForm: FormGroup;

  constructor(
    private router: Router,
    private countryService: CountryService,
    private customerService: CustomerService,
    private fb: FormBuilder,
    @Inject(TOASTR_TOKEN) private toastr: any
  ) { }

  ngOnInit() {
    this.isDirty = true;

    // Get countries
    this.countryService.getCountries().subscribe(countries => {
      this.countries = countries;
    });

    this.newCustomerForm = this.fb.group({
      first_name: ['', Validators.required],
      last_name: ['', Validators.required],
      phone: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      country: ['', Validators.required]
    });
  }

  saveCustomer(): void {
    const values = this.newCustomerForm.value;

    this.customerService.create({
      firstName:    values.first_name,
      lastName:     values.last_name,
      phoneNumber:  values.phone,
      email:        values.email,
      country:      values.country
    }).subscribe(data => {
      this.isDirty = false;
      this.toastr.success('The Customer has been created.');
      setTimeout(() => {
        this.router.navigate(['/customers']);
      }, 500);
    });
  }

  cancel(): void {
    this.router.navigate(['/customers']);
  }

  fieldIsValid(c: AbstractControl): boolean {
    return (c.touched || c.dirty) && !c.valid;
  }

}
