import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DonutsComponent } from './donuts.component';

describe('DonutsComponent', () => {
  let component: DonutsComponent;
  let fixture: ComponentFixture<DonutsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DonutsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DonutsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
