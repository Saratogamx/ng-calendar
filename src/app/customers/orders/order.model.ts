import { ICustomer } from '../customer.model';
import { IDetail } from './detail.model';

export interface IOrder {
    id: number;
    customerId: number;
    customer?: ICustomer;
    date: Date;
    details: IDetail[];
}
