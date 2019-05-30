import { Component, OnInit, OnChanges } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';

// Importing Models
import { IEvent } from '../calendar/event.model';
import { ICustomer } from '../customers/customer.model';

// Importing Services
import { EventsService } from '../calendar/services/events.service';
import { CustomerService } from '../customers/services/customer.service';
import { isNull } from 'util';

@Component({
  selector: 'app-view-appointment',
  templateUrl: './view-appointment.component.html',
  styleUrls: ['./view-appointment.component.css']
})
export class ViewAppointmentComponent implements OnInit {
  appointmentId: number;
  event: IEvent;
  relatedEvents: IEvent[];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private eventService: EventsService,
    private customerService: CustomerService
  ) {}

  ngOnInit() {

    this.route.params.subscribe((params: Params) => {
      this.relatedEvents = [];
      this.event = this.route.snapshot.data['appointment'];

      // Get customer info by event.customerId
      this.customerService.getCustomer(+this.event.customerId).subscribe(data => this.event.customer = data);

      // Get related events by event.customerId
      this.eventService.getByCustomer(this.event.customerId)
        .subscribe(data => {
          this.relatedEvents = data.filter(ev => +ev.id !== this.event.id);
        });
    });
  }
}
