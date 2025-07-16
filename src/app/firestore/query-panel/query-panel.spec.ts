import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QueryPanel } from './query-panel';

describe('QueryPanel', () => {
  let component: QueryPanel;
  let fixture: ComponentFixture<QueryPanel>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QueryPanel]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QueryPanel);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
