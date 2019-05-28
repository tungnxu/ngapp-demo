import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecentPostsListComponent } from './recent-posts-list.component';

describe('RecentPostsListComponent', () => {
  let component: RecentPostsListComponent;
  let fixture: ComponentFixture<RecentPostsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecentPostsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecentPostsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
