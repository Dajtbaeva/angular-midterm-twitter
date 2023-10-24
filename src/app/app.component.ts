import { Component, OnInit } from '@angular/core';
import { IPost } from './models/post';
import { PostsService } from './services/posts.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'posts-app';
  userId = '';
  posts: IPost[] = [];
  constructor(private postsService: PostsService) {}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  showPosts() {
    this.postsService.getPosts(this.userId).subscribe((data) => {
      this.posts = data;
    });
  }
}
