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
    // Specifies headers of the "post" call
    const options = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };

    return this.http.post('/api/events', event, options)
      .pipe(catchError(this.handleError<IEvent>('saveEvent')));
  }

  // Error handling in http requests
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    }
  }
}
