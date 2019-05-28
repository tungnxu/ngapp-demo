import { Component, OnInit } from '@angular/core';
import { PostModel } from 'src/app/shared/models/posts.model';
import { CloudFilestoreApiService } from 'src/app/core/http/cloud-filestore-api.service';
import { CategoryModel } from 'src/app/shared/models/categories.model';
import { QueryConfig } from 'src/app/shared/models/query.model';

@Component({
  selector: 'app-create-posts-page',
  templateUrl: './create-posts-page.component.html',
  styleUrls: ['./create-posts-page.component.scss'],

})
export class CreatePostsPageComponent implements OnInit {
  public newPost: PostModel = {};
  public categories: CategoryModel[];
  public selectedCat: string;

  constructor(private cloudFilestoreApiService: CloudFilestoreApiService) {
    this.loadCategory();

  }

  ngOnInit() {
  }

  onSubmit() {
    const postPayload: PostModel = {
      ...this.newPost,
      createdDate: new Date(Date.now()),
      categoryName: this.categories.find(c => c.categorySlug == this.selectedCat).categoryName,
      categorySlug: this.selectedCat,
      readingTime: 15
    };
    console.log(postPayload);
    this.cloudFilestoreApiService.create("posts", postPayload);


  }

  private loadCategory(): void {
    const categoryQuery: QueryConfig = {
      limit: 15,
      path: 'categories',
    }

    this.cloudFilestoreApiService.get(categoryQuery).subscribe(cats => {
      this.categories = cats;
    });
  }

}
