import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { EventsService } from '../calendar/services/events.service';

@Injectable({
  providedIn: 'root'
})
export class ViewAppointmentService implements Resolve<any> {

  constructor(private eventService: EventsService) { }

  resolve(route: ActivatedRouteSnapshot) {
    let appointmentId = +route.paramMap.get('id');

    return this.eventService.getEvent(appointmentId);
  }
}
