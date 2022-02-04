import { Injectable } from '@angular/core';
import { IPost } from './post.interface';
import POSTS from './posts.json';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  constructor(){}

  getPosts(): IPost[]{
    return JSON.parse(JSON.stringify(POSTS));
  }
}
