import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JustAComponent } from './just-acomponent';

describe('JustAComponent', () => {
  let component: JustAComponent;
  let fixture: ComponentFixture<JustAComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JustAComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(JustAComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
