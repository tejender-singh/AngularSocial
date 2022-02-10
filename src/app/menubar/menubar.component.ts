import { Component, EventEmitter, Output } from '@angular/core';
import { UserService } from '../user/user.service';

@Component({
  selector: 'app-menu-bar',
  templateUrl: './menubar.component.html',
  styleUrls: ['./menubar.component.scss']
})
export class MenuBarComponent {

  constructor(private userService: UserService){}

  onHomeClick(): void{
    alert('Home '+this.userService.userId);
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
    this.userService.logout();
  }
}
