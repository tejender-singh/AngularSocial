import { Component, OnInit } from '@angular/core';
import { IPost } from './post/post.interface';
import { PostService } from './post/post.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  posts: IPost[] = [];

  constructor(private postService: PostService){}

  ngOnInit(): void {
    this.posts = this.postService.getPosts();
  }
}
