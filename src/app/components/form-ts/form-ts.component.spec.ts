import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormTsComponent } from './form-ts.component';

describe('FormTsComponent', () => {
  let component: FormTsComponent;
  let fixture: ComponentFixture<FormTsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormTsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormTsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
