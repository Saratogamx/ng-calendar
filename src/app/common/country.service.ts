import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

// Import model for country
import { ICountry } from './country.model';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  constructor() { }

  getCountries(): Observable<ICountry[]> {
    return of(COUNTRIES);
  }

  getCountry(id: number): Observable<ICountry> {
    return of (COUNTRIES.find(country => country.id === id));
  }
}

const COUNTRIES: ICountry[] = [
  {
    id: 1,
    name: 'United States'
  },
  {
    id: 2,
    name: 'Mexico'
  },
  {
    id: 3,
    name: 'Canada'
  }
];
