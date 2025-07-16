import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthPanel } from './auth-panel';

describe('AuthPanel', () => {
  let component: AuthPanel;
  let fixture: ComponentFixture<AuthPanel>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AuthPanel]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AuthPanel);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
