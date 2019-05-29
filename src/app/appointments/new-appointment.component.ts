import { Component, OnInit, Output, EventEmitter, Inject } from '@angular/core';
import { AbstractControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TOASTR_TOKEN } from '../common/toastr.service';

import { ICustomer } from '../customers/customer.model';
import { CustomerService } from '../customers/services/customer.service';
import { EventsService } from '../calendar/services/events.service';
import { IEvent } from '../calendar/event.model';

function formatDate(date: Date): string {
  let month   = '' + (date.getMonth() + 1);
  let day     = '' + date.getDate();
  const year  = date.getFullYear();

  if (month.length < 2) { month = '0' + month; }
  if (day.length < 2) { day = '0' + day; }

  return [year, month, day].join('-');
}

function formatHours(date: Date): string {
  let hours   = date.getHours().toString();
  let minutes = date.getMinutes().toString();

  if (hours.length < 2) { hours = `0${hours}`; }
  if (minutes.length < 2) { minutes = `0${minutes}`; }

  return [hours, minutes].join(':') + ':00';
}

function dateValidator(c: AbstractControl): { [key: string]: boolean } | null {
  const startDateCtrl   = c.get('start_date');
  const finishDateCtrl  = c.get('finish_date');
  const startTimeCtrl   = c.get('start_time');
  const finishTimeCtrl  = c.get('finish_time');

  const start   = `${startDateCtrl.value} ${startTimeCtrl.value}`;
  const finish  = `${finishDateCtrl.value} ${finishTimeCtrl.value}`;

  // Finish date is earlier from the finish
  if ( new Date(start).getTime() > new Date(finish).getTime() ) {
    return { date: true };
  }

  return null;
}

@Component({
  selector: 'app-new-appointment',
  templateUrl: './new-appointment.component.html',
  styleUrls: ['./new-appointment.component.css']
})
export class NewAppointmentComponent implements OnInit {
  isDirty: boolean;
  allDay = false;
  customers: ICustomer[];
  appointmentForm: FormGroup;

  constructor(
    private customerService: CustomerService,
    private eventService: EventsService,
    private fb: FormBuilder,
    private router: Router,
    @Inject(TOASTR_TOKEN) private toastr: any
  ) { }

  ngOnInit() {
    this.isDirty = true;
    const today = new Date();
    const plus1Hour = new Date(new Date().setHours(today.getHours() + 1));

    // Fetch customers
    this.customerService.getCustomers().subscribe(data => this.customers = data);

    // Initialize form
    this.appointmentForm = this.fb.group({
      title: ['', Validators.required],
      dates: this.fb.group({
        start_date:   [formatDate(today), Validators.required],
        start_time:   [formatHours(today), Validators.required],
        finish_date:  [formatDate(plus1Hour), Validators.required],
        finish_time:  [formatHours(plus1Hour), Validators.required]
      }, { validator: dateValidator }),
      customer_id: ['', Validators.required],
      all_day: false,
      details: ['', Validators.required]
    });

    this.appointmentForm.get('all_day').valueChanges.subscribe(value => this.setAllDay(value));
    this.appointmentForm.get('dates.start_date').valueChanges.subscribe(value => this.setFinishDate(value));
  }

  onAlldayCheckboxChange(e) {
    this.allDay = !this.allDay;
  }

  // Sets value for all day
  setAllDay(value: boolean): void {
    this.allDay = value;
    const datesFormGroup = this.appointmentForm.get('dates');

    // If "allDay" then start_time, finish_date and finish_time get hidden
    if (value) {
      datesFormGroup.get('start_time').setValue('00:00:00');
      datesFormGroup.get('finish_date').setValue(datesFormGroup.get('start_date').value);
      datesFormGroup.get('finish_time').setValue('23:59:59');
    } else {
      datesFormGroup.get('start_time').setValue('');
      datesFormGroup.get('finish_date').setValue('');
      datesFormGroup.get('finish_time').setValue('');
    }

    datesFormGroup.updateValueAndValidity();
  }

  setFinishDate(value: string): void {
    const finishDateControl = this.appointmentForm.get('dates.finish_date');
    const finishDate = finishDateControl.value;

    if (new Date(finishDate) < new Date(value)) {
      finishDateControl.setValue(value);
    }
  }

  fieldIsValid(c: AbstractControl): boolean {
    return (c.touched || c.dirty) && !c.valid;
  }

  saveAppointment(): void {
    const values = this.appointmentForm.value;

    this.eventService.create({
      title:        values.title,
      start:        new Date(`${values.dates.start_date} ${values.dates.start_time}:00`),
      end:          new Date(`${values.dates.finish_date} ${values.dates.finish_time}:00`),
      allDay:       values.all_day,
      customerId:   values.customer_id,
      details:      values.details
    }).subscribe(event => {
      this.isDirty = false;
      this.toastr.success('The Appointment has been created.');
      setTimeout(() => {
        this.router.navigate(['/calendar']);
      }, 500);
    });
  }

  cancel(event): void {
    this.router.navigate(['/calendar']);
  }

}
