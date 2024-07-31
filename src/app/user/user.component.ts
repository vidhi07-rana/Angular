import { Component } from '@angular/core';
import { DUMMY_USERS } from '../dummy-user';

const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length)

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
selectUsers = DUMMY_USERS[randomIndex];

//bcuz it is the getter function we can use it as a property in property binding
//  imagePath(){
//   return 'assets/users/' + this.selectUsers.avatar
// }

get imagePath(){
  return 'assets/users/' + this.selectUsers.avatar
}

showUser(){
  const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length)
this.selectUsers = DUMMY_USERS[randomIndex]
 
}
}
