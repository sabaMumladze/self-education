import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GMapComponent } from './gmap.component';

describe('GMapComponent', () => {
  let component: GMapComponent;
  let fixture: ComponentFixture<GMapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GMapComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
