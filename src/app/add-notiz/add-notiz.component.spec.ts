import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNotizComponent } from './add-notiz.component';

describe('AddNotizComponent', () => {
  let component: AddNotizComponent;
  let fixture: ComponentFixture<AddNotizComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddNotizComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddNotizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
