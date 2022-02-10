import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-menu-bar',
  templateUrl: './menubar.component.html',
  styleUrls: ['./menubar.component.scss']
})
export class MenuBarComponent {

  @Output() onLogout: EventEmitter<boolean> = new EventEmitter();

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
    this.onLogout.next(false);
  }
}
