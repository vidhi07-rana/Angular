import { Component,computed,EventEmitter,input,Input,Output,signal } from '@angular/core';
// import { DUMMY_USERS } from '../dummy-user';

// const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length)

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
 
  
  //setting up signals input 
  // @Input({required : true}) id !: string
  // avatar = input.required<string>();
  // name = input.required<string>();

//function for input signals 
// imagePath= computed(()=>{
//   return 'assets/users/' + this.avatar()
// })



// selectUsers = signal(DUMMY_USERS[randomIndex]);
// imagePath = computed(()=>'assets/users/' + this.selectUsers().avatar )
//bcuz it is the getter function we can use it as a property in property binding


//simple Input Decorator
// imagePath(){
//   return 'assets/users/' + this.avatar
// }



//signals for simple function
// get imagePath(){
//   return 'assets/users/' + this.selectUsers().avatar
// }

// showUser(){
//   const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length)
// this.selectUsers.set(DUMMY_USERS[randomIndex]);

// }
}
