import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourrierlistComponent } from './courrierlist.component';

describe('CourrierlistComponent', () => {
  let component: CourrierlistComponent;
  let fixture: ComponentFixture<CourrierlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CourrierlistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CourrierlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
