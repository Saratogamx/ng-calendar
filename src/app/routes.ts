import { Routes } from '@angular/router';

import { CalendarComponent } from './calendar/calendar.component';
import { OrderListComponent } from './customers/orders/order-list.component';
import { CustomerListComponent } from './customers/customer-list.component';
import { ProductListComponent } from './products/product-list.component';
import { ViewAppointmentComponent } from './appointments/view-appointment.component';

export const appRoutes: Routes = [
    { path: 'calendar/appointment/:id', component: ViewAppointmentComponent },
    { path: 'calendar', component: CalendarComponent },
    { path: 'orders', component: OrderListComponent },
    { path: 'customers', component: CustomerListComponent },
    { path: 'products', component: ProductListComponent },
    { path: '', redirectTo: '/calendar', pathMatch: 'full' }
    /*{ path: 'events/new', component: CreateEventComponent, canDeactivate: ['canDeactivateCreateEvent'] },
    { path: 'events', component: EventsListComponent, resolve: { events: EventsListResolverService } },
    { path: 'events/:id', component: EventDetailsComponent, resolve: { event: EventResolverService } },
    { path: 'events/session/new', component: CreateSessionComponent },
    { path: '404', component: ErrNotfoundComponent },
    { path: '', redirectTo: '/events', pathMatch: 'full' },
    { path: 'user', loadChildren: './user/user.module#UserModule' },
    { path: '**', redirectTo: '/events', pathMatch: 'full' }*/
];
