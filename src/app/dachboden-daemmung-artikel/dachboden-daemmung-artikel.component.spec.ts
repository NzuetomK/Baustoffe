import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DachbodenDaemmungArtikelComponent } from './dachboden-daemmung-artikel.component';

describe('DachbodenDaemmungArtikelComponent', () => {
  let component: DachbodenDaemmungArtikelComponent;
  let fixture: ComponentFixture<DachbodenDaemmungArtikelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DachbodenDaemmungArtikelComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DachbodenDaemmungArtikelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
