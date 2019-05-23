import { IEvent } from '../calendar/event.model';

export interface ICustomer {
    id: number;
    name: string;
    lastname: string;
    phoneNumber: string;
    email: string;
    country: string;
    events?: IEvent[];
}
