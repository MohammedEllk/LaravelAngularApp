import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewPDFComponentComponent } from './view-pdfcomponent.component';

describe('ViewPDFComponentComponent', () => {
  let component: ViewPDFComponentComponent;
  let fixture: ComponentFixture<ViewPDFComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewPDFComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewPDFComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
