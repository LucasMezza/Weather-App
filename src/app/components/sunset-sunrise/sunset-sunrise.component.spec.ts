import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SunsetSunriseComponent } from './sunset-sunrise.component';

describe('SunsetSunriseComponent', () => {
  let component: SunsetSunriseComponent;
  let fixture: ComponentFixture<SunsetSunriseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SunsetSunriseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SunsetSunriseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
