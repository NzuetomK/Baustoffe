import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProduktbeschreibungComponent } from './produktbeschreibung.component';

describe('ProduktbeschreibungComponent', () => {
  let component: ProduktbeschreibungComponent;
  let fixture: ComponentFixture<ProduktbeschreibungComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProduktbeschreibungComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProduktbeschreibungComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
