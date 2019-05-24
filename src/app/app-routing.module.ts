import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainLayoutComponent } from './core/layout/main-layout/main-layout.component';
import { AuthGuard } from './core/guards/authguard.guard';

const routes: Routes = [
  {
    path: '', component: MainLayoutComponent, children: [
      {
        path: '', loadChildren: './modules/home/home.module#HomeModule', canActivate: [AuthGuard]
      },
      { path: '', loadChildren: './modules/auth/auth.module#AuthModule' },
    ]
  },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
