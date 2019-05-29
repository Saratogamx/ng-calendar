import { TestBed, async, inject } from '@angular/core/testing';

import { AppointmentGuard } from './appointment.guard';

describe('AppointmentGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AppointmentGuard]
    });
  });

  it('should ...', inject([AppointmentGuard], (guard: AppointmentGuard) => {
    expect(guard).toBeTruthy();
  }));
});
