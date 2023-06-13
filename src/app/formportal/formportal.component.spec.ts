import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormportalComponent } from './formportal.component';

describe('FormportalComponent', () => {
  let component: FormportalComponent;
  let fixture: ComponentFixture<FormportalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormportalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormportalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
