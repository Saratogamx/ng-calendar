import { Routes } from '@angular/router';

import { CalendarComponent } from './calendar/calendar.component';
import { OrderListComponent } from './customers/orders/order-list.component';
import { CustomerListComponent } from './customers/customer-list.component';
import { ProductListComponent } from './products/product-list.component';
import { ViewAppointmentComponent } from './appointments/view-appointment.component';
import { NewAppointmentComponent } from './appointments/new-appointment.component';
import { NewProductComponent } from './products/new-product.component';
import { NewCustomerComponent } from './customers/new-customer.component';
import { AppointmentGuard } from './appointments/appointment.guard';
import { ProductGuard } from './products/product.guard';
import { CustomerGuard } from './customers/customer.guard';
import { LoginComponent } from './common/auth/login.component';

import { AppointmentResolverService } from './appointments/appointment-resolver.service';
import { ViewAppointmentService } from './appointments/view-appointment.resolver';

export const appRoutes: Routes = [
    { path: 'calendar/new', component: NewAppointmentComponent, canDeactivate: [AppointmentGuard] },
    { 
        path: 'calendar/appointment/:id',
        component: ViewAppointmentComponent,
        canActivate: [AppointmentGuard],
        resolve: {
            appointment: ViewAppointmentService
        }
    },
    { path: 'calendar', component: CalendarComponent },
    { path: 'orders', component: OrderListComponent },
    { path: 'customers/new', component: NewCustomerComponent, canDeactivate: [CustomerGuard] },
    { path: 'customers', component: CustomerListComponent },
    { path: 'products/new', component: NewProductComponent, canDeactivate: [ProductGuard] },
    { path: 'products', component: ProductListComponent },
    { path: 'login', component: LoginComponent },
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
