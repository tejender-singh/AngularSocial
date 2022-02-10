import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable, Subject } from 'rxjs';
import USERS from './users.json';
@Injectable({
  providedIn: 'root',
})
export class UserService {
  loginSubject = new Subject<boolean>();

  set isUserLoggedIn(isUserLoggedIn: boolean){
    localStorage.setItem('isUserLoggedIn', isUserLoggedIn.toString() );
  }
  get isUserLoggedIn(): boolean{
    return localStorage.getItem('isUserLoggedIn') === 'true';
  }

  set userId(userId: string){
    localStorage.setItem('userId', userId );
  }
  get userId(): string{
    const userId = localStorage.getItem('userId')
    return userId ? userId : '';
  }

  constructor() {}

  public onLoginChanged(): Observable<boolean> {
    return this.loginSubject.asObservable();
  }

  public login(username: string, password: string): string {
    const users = this.getUsers();
    const index = users.findIndex((user) => user.userid === username);

    if (index === -1) {
      return 'User not found';
    } else if (users[index].password !== password) {
      return 'Incorrect Password';
    }
    this.userId = username;
    this.isUserLoggedIn = true;
    this.loginSubject.next(true);
    return 'Success';
  }

  public logout() {
    this.userId = '';
    this.isUserLoggedIn = false;
    this.loginSubject.next(false);
  }

  private getUsers(): any[] {
    return JSON.parse(JSON.stringify(USERS));
  }
}
