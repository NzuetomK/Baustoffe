import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrtgangziegelArtikelComponent } from './ortgangziegel-artikel.component';

describe('OrtgangziegelArtikelComponent', () => {
  let component: OrtgangziegelArtikelComponent;
  let fixture: ComponentFixture<OrtgangziegelArtikelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OrtgangziegelArtikelComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OrtgangziegelArtikelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
