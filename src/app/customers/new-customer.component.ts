import { Component, OnInit } from '@angular/core';

// Importing models
import { ICountry } from '../common/country.model';

// Importing services
import { CountryService } from '../common/country.service';

@Component({
  selector: 'app-new-customer',
  templateUrl: './new-customer.component.html',
  styleUrls: ['./new-customer.component.css']
})
export class NewCustomerComponent implements OnInit {
  countries: ICountry[];

  constructor(private countryService: CountryService) { }

  ngOnInit() {
    // Get countries
    this.countryService.getCountries().subscribe(countries => {
      this.countries = countries;
    });
  }

}
