import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotizenComponent } from './notizen.component';

describe('NotizenComponent', () => {
  let component: NotizenComponent;
  let fixture: ComponentFixture<NotizenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotizenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NotizenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
