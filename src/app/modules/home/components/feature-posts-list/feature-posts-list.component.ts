import { Component, OnInit } from '@angular/core';
import { PostService } from '../../services/post.service';
import { Observable } from 'rxjs';
import { QueryConfig } from 'src/app/shared/models/query.model';
import { PostSlideService } from '../../services/post-slide.service';
import { CloudFilestorePaginationService } from 'src/app/core/http/cloud-filestore-pagination.service';
import { CloudFilestoreApiService } from 'src/app/core/http/cloud-filestore-api.service';

@Component({
  selector: 'feature-posts-list',
  templateUrl: './feature-posts-list.component.html',
  styleUrls: ['./feature-posts-list.component.scss'],
  
})
export class FeaturePostsListComponent implements OnInit {
  public item$: Observable<any>;
  constructor(private postService : CloudFilestoreApiService) {
    const postQuery: QueryConfig = {
      limit: 6,
      // where: [{
      //   field: 'readingTime',
      //   operator: '>',
      //   value: 20
      // }],
      orderBy: 'createdDate',
      path: 'posts',
      prepend: false,
      reverse: true, //true will show newest first
    }
    this.item$ = this.postService.get(postQuery);
   }

  ngOnInit() {
  }

  

}
