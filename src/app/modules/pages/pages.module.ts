import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HomePageComponent} from './home-page/home-page.component';
import {RecentPostsComponent} from './recent-posts/recent-posts.component';
import {RouterModule, Routes} from '@angular/router';


const routes: Routes = [
  {path: '', component: HomePageComponent},
  {path: 'recentPosts', component: RecentPostsComponent}
];

@NgModule({
  declarations: [HomePageComponent, RecentPostsComponent],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    RouterModule
  ]
})
export class PagesModule {
}
