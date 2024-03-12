import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DachfensterComponent } from './dachfenster.component';

describe('DachfensterComponent', () => {
  let component: DachfensterComponent;
  let fixture: ComponentFixture<DachfensterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DachfensterComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DachfensterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
