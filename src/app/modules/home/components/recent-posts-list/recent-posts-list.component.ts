import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { PostModel, PostListViewModel } from 'src/app/shared/models/posts.model';
import { QueryConfig } from 'src/app/shared/models/query.model';
import { PostService } from '../../services/post.service';
import { CloudFilestorePaginationService } from 'src/app/core/http/cloud-filestore-pagination.service';
import { map, take } from 'rxjs/operators';

@Component({
  selector: 'recent-posts-list',
  templateUrl: './recent-posts-list.component.html',
  styleUrls: ['./recent-posts-list.component.scss'],
  providers: [
    CloudFilestorePaginationService
  ]
})
export class RecentPostsListComponent implements OnInit {

  private item$: Observable<PostModel[]>;

  public recentPosts: PostListViewModel[];
  constructor(private postService: CloudFilestorePaginationService) {

    const postQuery: QueryConfig = {
      limit: 0,
      orderBy: 'createdDate',
      path: 'posts',
      prepend: false,
      reverse: true, //true will show newest first
    }
    this.item$ = this.postService.get(postQuery);
    this.item$.pipe(
      map(listPost => {
        let recentPostlst: PostListViewModel[] = [];
        debugger;
        listPost.forEach(post => {
          recentPostlst.push({
            id: post.id,
            slug: post.slug,
            summary: post.summary,
            thumbnail: post.thumbnail,
            title: post.title,
            categoryName: post.categoryName,
            categorySlug: post.categorySlug,
          })
        });
        return recentPostlst;
      })
    ).subscribe(data => {
      this.recentPosts = data;
    }
    );

    // const categoryQuery: QueryConfig = {
    //   limit: 5,
    //   orderBy: 'categoryName',
    //   path: 'categories',
    //   prepend: false,
    //   reverse: false, //true will show newest first
    // }
    // this.item2$ = this.cloudFilestorePaginationService.get(categoryQuery);

  }

  ngOnInit() {
  }

  public addItem() {
    // this.cloudFilestoreApiService.create('posts', post);
    console.log("vua them bai so ${index}");
    // }

  }

  public more() {
    this.postService.loadMore();
    // this.mapAndUpdate(more)
  }



}
