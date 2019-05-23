import { IEvent } from '../calendar/event.model';

export interface ICustomer {
    id: number;
    firstName: string;
    lastName: string;
    phoneNumber: string;
    email: string;
    country: string;
    events?: IEvent[];
}
