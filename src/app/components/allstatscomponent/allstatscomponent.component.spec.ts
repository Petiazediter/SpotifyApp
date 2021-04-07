import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllstatscomponentComponent } from './allstatscomponent.component';

describe('AllstatscomponentComponent', () => {
  let component: AllstatscomponentComponent;
  let fixture: ComponentFixture<AllstatscomponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllstatscomponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllstatscomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
