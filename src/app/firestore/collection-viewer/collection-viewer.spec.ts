import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CollectionViewer } from './collection-viewer';

describe('CollectionViewer', () => {
  let component: CollectionViewer;
  let fixture: ComponentFixture<CollectionViewer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CollectionViewer]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CollectionViewer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
