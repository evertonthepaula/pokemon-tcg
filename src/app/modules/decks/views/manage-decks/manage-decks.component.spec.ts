import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageDecksComponent } from './manage-decks.component';

describe('ManageDecksComponent', () => {
  let component: ManageDecksComponent;
  let fixture: ComponentFixture<ManageDecksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ManageDecksComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ManageDecksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
