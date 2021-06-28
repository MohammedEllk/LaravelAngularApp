import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewcourrierComponent } from './newcourrier.component';

describe('NewcourrierComponent', () => {
  let component: NewcourrierComponent;
  let fixture: ComponentFixture<NewcourrierComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewcourrierComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewcourrierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
