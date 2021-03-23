import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfiniteLoadBarComponent } from './infinite-load-bar.component';

describe('InfiniteLoadBarComponent', () => {
  let component: InfiniteLoadBarComponent;
  let fixture: ComponentFixture<InfiniteLoadBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfiniteLoadBarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InfiniteLoadBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
