import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, Resolve } from '@angular/router';
import { EventsService } from '../calendar/services/events.service';

@Injectable({
  providedIn: 'root'
})
export class AppointmentResolverService implements Resolve<any> {

  constructor(private eventService: EventsService) {}

  resolve(route: ActivatedRouteSnapshot) {
    return this.eventService.getEvents();
  }
}
