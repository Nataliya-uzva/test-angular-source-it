import { Component } from '@angular/core';

@Component({
  selector: 'app-root-wert',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  index = 0;
  title = 'test-angular-source-it';

  users = ['Joun', 'Vasya', 'Rosa'];

  remove(currentUser) {
    this.users = this.users
      .filter(user => user !== currentUser);
  }

  edit(user, index, input) {
    this.index = index;
    input.value = user;
  }

  addUser(input) {
    this.users.push(input.value);
    input.value = '';
  }

  editUser(input) {
    this.users[this.index - 1] = input.value;
    this.index = 0;
    input.value = '';
  }
}
