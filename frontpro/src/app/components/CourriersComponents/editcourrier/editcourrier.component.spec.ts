import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditcourrierComponent } from './editcourrier.component';

describe('EditcourrierComponent', () => {
  let component: EditcourrierComponent;
  let fixture: ComponentFixture<EditcourrierComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditcourrierComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditcourrierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
