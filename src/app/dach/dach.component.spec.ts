import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DachComponent } from './dach.component';

describe('DachComponent', () => {
  let component: DachComponent;
  let fixture: ComponentFixture<DachComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DachComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DachComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
