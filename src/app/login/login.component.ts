import { Component, EventEmitter, Output } from '@angular/core';
import { UserService } from '../user/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  _username = '';
  _password = '';
  loginError = '';
  isButtonDisabled = true;

  constructor(private userService: UserService){}

  get username(): string {
    return this._username;
  }
  set username(username: string) {
    this._username = username;
    this.refreshButton();
  }

  get password(): string {
    return this._password;
  }
  set password(password: string) {
    this._password = password;
    this.refreshButton();
  }

  onLoginClick() {
    const response = this.userService.login(this.username, this.password);
    if(response === 'Success'){
      this.loginError = '';
    } else {
      this.loginError = response;
    }
  }

  refreshButton() {
    this.isButtonDisabled = !(
      this.password.length > 0 && this.username.length > 0
    );
  }
}
