import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogFensterComponent } from './dialog-fenster.component';

describe('DialogFensterComponent', () => {
  let component: DialogFensterComponent;
  let fixture: ComponentFixture<DialogFensterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogFensterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogFensterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
