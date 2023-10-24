import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { FeedPageComponent } from './pages/feed-page/feed-page.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';

const routes: Routes = [
  { path: 'home', component: HomePageComponent },
  { path: 'feed', component: FeedPageComponent },
  { path: 'about', component: AboutPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
