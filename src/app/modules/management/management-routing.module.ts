import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreatePostsPageComponent } from './pages/create-posts-page/create-posts-page.component';
import { ManagePostsPageComponent } from './pages/manage-posts-page/manage-posts-page.component';

const routes: Routes = [
  { path:'',    component: ManagePostsPageComponent  },
  { path:'new-post',    component: CreatePostsPageComponent  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManagementRoutingModule { }
