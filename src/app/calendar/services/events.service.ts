import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

// Importing Models
import { IEvent } from '../event.model';

@Injectable({
  providedIn: 'root'
})
export class EventsService {

  constructor(private http: HttpClient) { }

  getEvents(): Observable<IEvent[]> {
    return this.http.get<IEvent[]>('/api/events')
      .pipe(catchError(this.handleError<IEvent[]>('getEvents', [])));
  }

  getEvent(id: number): Observable<IEvent> {
    return this.http.get<IEvent>(`/api/events/${id}`)
      .pipe(catchError(this.handleError<IEvent>('getEvent')));
  }

  getByCustomer(customerId: number): Observable<IEvent[]> {
    return this.http.get<IEvent[]>(`/api/customers/${customerId}/events`)
      .pipe(catchError(this.handleError<IEvent[]>('getEvents', [])));
  }

  create(event: IEvent): Observable<any> {
    event.id = (this.getMaxId() + 1);
    EVENTS.push(event);

    return of(event);
  }

  private getMaxId(): number {
    const idsArray = EVENTS.map(item => +item.id);
    return Math.max.apply(Math, idsArray);
  }

  // Error handling in http requests
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    }
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
    // tslint:disable-next-line:max-line-length
    details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris mollis nisl quis est aliquet, ut blandit nibh mollis. Vestibulum eu pretium quam, sed tempor ligula. Nam in mattis neque, tincidunt mattis urna. Donec eleifend mauris et felis consectetur consectetur. Aenean iaculis ornare nibh, ac efficitur est laoreet ac. Aenean id auctor magna, ut ullamcorper felis. Integer a lorem nec nibh fringilla dictum non non mi. Donec sit amet justo mattis, facilisis risus sed, feugiat eros. Duis a lobortis diam.'
  }
];
