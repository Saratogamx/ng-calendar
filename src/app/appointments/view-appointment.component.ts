import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

// Importing Models
import { IEvent } from '../calendar/event.model';
import { ICustomer } from '../customers/customer.model';

// Importing Services
import { EventsService } from '../calendar/services/events.service';

@Component({
  selector: 'app-view-appointment',
  templateUrl: './view-appointment.component.html',
  styleUrls: ['./view-appointment.component.css']
})
export class ViewAppointmentComponent implements OnInit {
  event: IEvent;

  constructor(
    private route: ActivatedRoute,
    private eventService: EventsService
  ) { }

  ngOnInit() {
    this.eventService.getEvent(+this.route.snapshot.paramMap.get('id')).subscribe(event => this.event = event);
  }

}
