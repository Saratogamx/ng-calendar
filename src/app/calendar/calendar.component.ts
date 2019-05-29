import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import { Router } from '@angular/router';

// Full calendar
import { FullCalendarComponent } from '@fullcalendar/angular';
import { EventInput } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGrigPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';

// Importing Services
import { EventsService } from './services/events.service';

// Importing inject token
import { JQ_TOKEN } from '../common/jquery.service';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {
  @ViewChild('calendar') calendarComponent: FullCalendarComponent; // Access the DOM for #calendar
  calendarVisible = true;
  calendarPlugins = [dayGridPlugin, timeGrigPlugin, interactionPlugin];
  calendarWeekends = true;
  calendarEvents: EventInput[] = [];

  title = 'My Appointments';

  constructor(
    private eventService: EventsService,
    private router: Router,
    @Inject(JQ_TOKEN) private $: any
  ) {}

  ngOnInit() {
    this.eventService.getEvents().subscribe(events => {
      this.calendarEvents = events;
    });
  }

  handleDateClick(e) {
    const calApi = this.calendarComponent.getApi();
    calApi.select(e.date);
  }

  handleEventClick(e) {
    const event = e.event;
    this.router.navigate([`/calendar/appointment/${event.id}`]);
  }

  handleNewAppointment(event): void {
    const calApi = this.calendarComponent.getApi();

    calApi.addEvent(event.appointment);
    this.$('[elementid="newAppointment"]').modal('hide');
  }

}
