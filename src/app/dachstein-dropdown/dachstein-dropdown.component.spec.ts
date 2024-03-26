import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DachsteinDropdownComponent } from './dachstein-dropdown.component';

describe('DachsteinDropdownComponent', () => {
  let component: DachsteinDropdownComponent;
  let fixture: ComponentFixture<DachsteinDropdownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DachsteinDropdownComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DachsteinDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
