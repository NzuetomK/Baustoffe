import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DachbahnenComponent } from './dachbahnen.component';

describe('DachbahnenComponent', () => {
  let component: DachbahnenComponent;
  let fixture: ComponentFixture<DachbahnenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DachbahnenComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DachbahnenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
