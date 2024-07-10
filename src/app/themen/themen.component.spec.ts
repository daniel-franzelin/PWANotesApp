import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThemenComponent } from './themen.component';

describe('ThemenComponent', () => {
  let component: ThemenComponent;
  let fixture: ComponentFixture<ThemenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThemenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ThemenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
