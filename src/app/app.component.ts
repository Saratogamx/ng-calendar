import { Component, OnInit, Inject } from '@angular/core';

import { TOASTR_TOKEN, Toastr } from './common/toastr.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(@Inject(TOASTR_TOKEN) private toastr: Toastr) {}

  ngOnInit() {}
}
