import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BraasUnterkategorienComponent } from './braas-unterkategorien.component';

describe('BraasUnterkategorienComponent', () => {
  let component: BraasUnterkategorienComponent;
  let fixture: ComponentFixture<BraasUnterkategorienComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BraasUnterkategorienComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BraasUnterkategorienComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
