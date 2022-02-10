import { Component, OnInit } from '@angular/core';
import { IPost } from './post/post.interface';
import { PostService } from './post/post.service';
import { UserService } from './user/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  posts: IPost[] = [];
  isLoggedIn = false;
  constructor(private postService: PostService, private userService: UserService){}

  ngOnInit(): void {
    this.posts = this.postService.getPosts();
    this.isLoggedIn = this.userService.isUserLoggedIn;
    this.initializeUserLogoutListener();
  }
  initializeUserLogoutListener() {
    this.userService.onLoginChanged().subscribe(isUserLoggedIn => this.isLoggedIn = isUserLoggedIn);
  }

}
