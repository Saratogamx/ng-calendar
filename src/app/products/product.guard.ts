import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, CanDeactivate } from '@angular/router';
import { Observable } from 'rxjs';

import { NewProductComponent } from './new-product.component';

@Injectable({
  providedIn: 'root'
})
export class ProductGuard implements CanDeactivate<NewProductComponent> {

  canDeactivate(component: NewProductComponent, route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (component.isDirty) {
      return window.confirm('You have not saved this product yet, do you really want to cancel?');
    }

    return true;
  }
}
