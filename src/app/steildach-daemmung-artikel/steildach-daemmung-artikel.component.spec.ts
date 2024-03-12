import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SteildachDaemmungArtikelComponent } from './steildach-daemmung-artikel.component';

describe('SteildachDaemmungArtikelComponent', () => {
  let component: SteildachDaemmungArtikelComponent;
  let fixture: ComponentFixture<SteildachDaemmungArtikelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SteildachDaemmungArtikelComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SteildachDaemmungArtikelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
