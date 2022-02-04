import { Component, Input, OnInit } from '@angular/core';
@Component({
    selector: 'app-post',
    templateUrl: './post.component.html',
    styleUrls: ['./post.component.scss']
})
export class PostComponent{
  @Input()
  postImages = [];

  @Input()
  profileImage = '';

  @Input()
  postCaption = '';

  @Input()
  userId = '';

  @Input()
  postLocation = '';

  @Input()
  liked = false;

  onLikeClick(): void {
      this.liked = !this.liked;
  }

  onPostComment(): void {
  }
}
