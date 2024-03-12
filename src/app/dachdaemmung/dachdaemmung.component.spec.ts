import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DachdaemmungComponent } from './dachdaemmung.component';

describe('DachdaemmungComponent', () => {
  let component: DachdaemmungComponent;
  let fixture: ComponentFixture<DachdaemmungComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DachdaemmungComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DachdaemmungComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
