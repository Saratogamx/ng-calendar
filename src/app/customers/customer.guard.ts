import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanDeactivate } from '@angular/router';
import { Observable } from 'rxjs';

import { NewCustomerComponent } from './new-customer.component';

@Injectable({
  providedIn: 'root'
})
export class CustomerGuard implements CanDeactivate<NewCustomerComponent> {

  canDeactivate(component: NewCustomerComponent, router: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (component.isDirty) {
      return window.confirm('You have not saved this customer yet, do you really want to cancel?');
    }

    return true;
  }
}
