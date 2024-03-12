import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZiegelComponent } from './ziegel.component';

describe('ZiegelComponent', () => {
  let component: ZiegelComponent;
  let fixture: ComponentFixture<ZiegelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ZiegelComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ZiegelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
