import { Injectable } from '@angular/core';
import USERS from './users.json';
@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor() {}

  public login(username: string, password: string): string {
    const users = this.getUsers();
    const index = users.findIndex((user) => user.userid === username);
    if (index === -1) return 'User not found';
    else if (users[index].password !== password) return 'Incorrect Password';
    return 'Success';
  }

  private getUsers(): any[] {
    return JSON.parse(JSON.stringify(USERS));
  }
}
