import { Injectable, Inject } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, CanActivate, Router, CanDeactivate } from '@angular/router';
import { map, tap } from 'rxjs/operators';
import { Observable } from 'rxjs';

import { NewAppointmentComponent } from './new-appointment.component';

// Import services
import { EventsService } from '../calendar/services/events.service';
import { IEvent } from '../calendar/event.model';
import { TOASTR_TOKEN } from '../common/toastr.service';

@Injectable({
  providedIn: 'root'
})
export class AppointmentGuard implements CanActivate, CanDeactivate<NewAppointmentComponent> {

  constructor(
    private router: Router,
    private eventService: EventsService,
    @Inject(TOASTR_TOKEN) private toastr: any
  ) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    return true;
  }

  canDeactivate(component: NewAppointmentComponent, route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (component.isDirty) {
      return window.confirm('You have not saved this appointment yet, do you really want to cancel?');
    }

    return true;
  }
}

/*if (typeof event === 'undefined') {
  this.toastr.error(`The Appointment with ID:${appointmentId} does not exist.`);
  this.router.navigate(['/calendar']);
  return false;
} else {
  return true;
}*/
