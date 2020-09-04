import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomePageComponent} from './modules/pages/home-page/home-page.component';
import {RecentPostsComponent} from './modules/pages/recent-posts/recent-posts.component';
import {PagesModule} from './modules/pages/pages.module';


const routes: Routes = [
  {path: '', loadChildren: './modules/pages/pages.module#PagesModule'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
