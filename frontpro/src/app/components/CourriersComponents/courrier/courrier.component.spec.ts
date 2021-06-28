import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourrierComponent } from './courrier.component';

describe('CourrierComponent', () => {
  let component: CourrierComponent;
  let fixture: ComponentFixture<CourrierComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CourrierComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CourrierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
