import { Component } from '@angular/core';


@Component({
    selector: 'app-post',
    templateUrl: './post.component.html',
    styleUrls: ['./post.component.scss']
})
export class PostComponent{
    postImage = 'https://material.angular.io/assets/img/examples/shiba2.jpg';
    profileImage = 'https://material.angular.io/assets/img/examples/shiba1.jpg';
    postCaption = `The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.
    A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally
    bred for hunting.`;
    userId = 'Shiba Inu';
    postLocation = 'Dog Breed';
    liked = false;
    onLikeClick(): void{
        this.liked = !this.liked;
    }
}
