import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SchieferComponent } from './schiefer.component';

describe('SchieferComponent', () => {
  let component: SchieferComponent;
  let fixture: ComponentFixture<SchieferComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SchieferComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SchieferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
