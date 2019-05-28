import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeaturePostsListComponent } from './feature-posts-list.component';

describe('FeaturePostsListComponent', () => {
  let component: FeaturePostsListComponent;
  let fixture: ComponentFixture<FeaturePostsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeaturePostsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeaturePostsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
