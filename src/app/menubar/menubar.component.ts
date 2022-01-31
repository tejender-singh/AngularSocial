import { Component } from '@angular/core';

@Component({
  selector: 'app-menu-bar',
  templateUrl: './menubar.component.html',
  styleUrls: ['./menubar.component.scss']
})
export class MenuBarComponent {
  title = 'AngularSocial';

  onHomeClick(): void{
    alert('hello');
  }

  onMessageClick(): void{
    alert('onMessageClick');
  }

  onAddPostClick(): void{
    alert('onAddPostClick');
  }

  onExploreClick(): void{
    alert('onExploreClick');
  }

  onLikesClick(): void{
    alert('onLikesClick');
  }

  onProfileClick(): void{
    alert('onProfileClick');
  }

}
