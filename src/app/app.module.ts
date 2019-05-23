import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavbarComponent } from './nav/navbar.component';
import { SidebarComponent } from './nav/sidebar.component';
import { CalendarComponent } from './calendar/calendar.component';
import { ModalWindowComponent } from './common/modal-window.component';
import { NewAppointmentComponent } from './appointments/new-appointment.component';
import { OrderListComponent } from './customers/orders/order-list.component';
import { NewCustomerorderComponent } from './customers/orders/new-customerorder.component';
import { CustomerListComponent } from './customers/customer-list.component';
import { NewCustomerComponent } from './customers/new-customer.component';
import { ProductListComponent } from './products/product-list.component';
import { NewProductComponent } from './products/new-product.component';

// Importing custom directives
import { ModalTriggerDirective } from './common/modal-trigger.directive';

// Load third-party modules
import { FullCalendarModule } from '@fullcalendar/angular';

// Importing file with routing rules
import { appRoutes } from './routes';

// Injection token for toastr service
import { TOASTR_TOKEN, Toastr } from './common/toastr.service';
// Injection token for jQuery service
import { JQ_TOKEN } from './common/jQuery.service';
import { ViewAppointmentComponent } from './appointments/view-appointment.component';


// Global value for "toastr" and "jquery" objects
// tslint:disable-next-line:no-string-literal
const toastr: Toastr = window['toastr'];
// tslint:disable-next-line:no-string-literal
const jQuery = window['$'];

@NgModule({
  imports: [
    BrowserModule,
    FullCalendarModule,
    RouterModule.forRoot(appRoutes),
  ],
  declarations: [
    AppComponent,
    NavbarComponent,
    SidebarComponent,
    CalendarComponent,
    ModalWindowComponent,
    ModalTriggerDirective,
    NewAppointmentComponent,
    OrderListComponent,
    NewCustomerorderComponent,
    CustomerListComponent,
    NewCustomerComponent,
    ProductListComponent,
    NewProductComponent,
    ViewAppointmentComponent
  ],
  providers: [
    // Declaring TOASTR_TOKEN injection token as a provider for toastr and jQuery
    {
      provide: TOASTR_TOKEN,
      useValue: toastr
    },
    {
      provide: JQ_TOKEN,
      useValue: jQuery
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
