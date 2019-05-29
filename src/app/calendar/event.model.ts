import { ICustomer } from '../customers/customer.model';

export interface IEvent {
    id?: number;
    title: string;
    start: Date;
    end: Date;
    allDay: boolean;
    customerId: number;
    customer?: ICustomer;
    details: string;
}
