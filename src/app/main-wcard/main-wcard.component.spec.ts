import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainWCardComponent } from './main-wcard.component';

describe('MainWCardComponent', () => {
  let component: MainWCardComponent;
  let fixture: ComponentFixture<MainWCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MainWCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MainWCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
