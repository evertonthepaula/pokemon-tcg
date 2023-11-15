import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokeCardEspecialComponent } from './poke-card-especial.component';

describe('PokeCardEspecialComponent', () => {
  let component: PokeCardEspecialComponent;
  let fixture: ComponentFixture<PokeCardEspecialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PokeCardEspecialComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PokeCardEspecialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
