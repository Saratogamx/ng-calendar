import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewCustomerorderComponent } from './new-customerorder.component';

describe('NewCustomerorderComponent', () => {
  let component: NewCustomerorderComponent;
  let fixture: ComponentFixture<NewCustomerorderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewCustomerorderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewCustomerorderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
