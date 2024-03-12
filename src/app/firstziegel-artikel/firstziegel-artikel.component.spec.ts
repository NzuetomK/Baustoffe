import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstziegelArtikelComponent } from './firstziegel-artikel.component';

describe('FirstziegelArtikelComponent', () => {
  let component: FirstziegelArtikelComponent;
  let fixture: ComponentFixture<FirstziegelArtikelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FirstziegelArtikelComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FirstziegelArtikelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
