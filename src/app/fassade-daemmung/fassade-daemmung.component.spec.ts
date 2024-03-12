import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FassadeDaemmungComponent } from './fassade-daemmung.component';

describe('FassadeDaemmungComponent', () => {
  let component: FassadeDaemmungComponent;
  let fixture: ComponentFixture<FassadeDaemmungComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FassadeDaemmungComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FassadeDaemmungComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
