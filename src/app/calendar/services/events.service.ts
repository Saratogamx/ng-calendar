import { Injectable, EventEmitter } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

// Importing Models
import { IEvent } from '../event.model';
import { ICustomer } from '../../customers/customer.model';

@Injectable({
  providedIn: 'root'
})
export class EventsService {

  constructor() { }

  getEvents(): Observable<IEvent[]> {
    return of(EVENTS);
  }

  getEvent(id: number) {
    const event = EVENTS.find(ev => ev.id === id);
    return of(event);
  }
}

const EVENTS: IEvent[] = [
  {
    id: 1,
    title: 'Website Development: Project Kickoff',
    start: new Date('2019-05-10 00:00:00'),
    end: new Date('2019-05-11 23:59:59'),
    allDay: false,
    customerId: 1,
    customer: {
      id: 1,
      name: 'John',
      lastname: 'Doe',
      phoneNumber: '+52 13331294341',
      email: 'john.doe@gmail.com',
      country: 'Mexico'
    },
    // tslint:disable-next-line:max-line-length
    details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris mollis nisl quis est aliquet, ut blandit nibh mollis. Vestibulum eu pretium quam, sed tempor ligula. Nam in mattis neque, tincidunt mattis urna. Donec eleifend mauris et felis consectetur consectetur. Aenean iaculis ornare nibh, ac efficitur est laoreet ac. Aenean id auctor magna, ut ullamcorper felis. Integer a lorem nec nibh fringilla dictum non non mi. Donec sit amet justo mattis, facilisis risus sed, feugiat eros. Duis a lobortis diam.'
  },
  {
    id: 2,
    title: 'Website Development: Sprint 1 Planning',
    start: new Date('2019-05-15 14:00:00'),
    end: new Date('2019-05-15 15:00:00'),
    allDay: false,
    customerId: 2,
    customer: {
      id: 2,
      name: 'Jane',
      lastname: 'Doe',
      phoneNumber: '+52 13332837283',
      email: 'jane.doe@gmail.com',
      country: 'United States'
    },
    // tslint:disable-next-line:max-line-length
    details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris mollis nisl quis est aliquet, ut blandit nibh mollis. Vestibulum eu pretium quam, sed tempor ligula. Nam in mattis neque, tincidunt mattis urna. Donec eleifend mauris et felis consectetur consectetur. Aenean iaculis ornare nibh, ac efficitur est laoreet ac. Aenean id auctor magna, ut ullamcorper felis. Integer a lorem nec nibh fringilla dictum non non mi. Donec sit amet justo mattis, facilisis risus sed, feugiat eros. Duis a lobortis diam.'
  }
];
