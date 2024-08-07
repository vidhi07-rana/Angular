import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserComponent } from "./user/user.component";
import { DUMMY_USERS } from './dummy-user';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { ChangeDetectorRef } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'demo1';
  // message!:string;
  name ! :string
  users = DUMMY_USERS;
  selectid :string = ''


 
constructor(private cdr: ChangeDetectorRef) {}

  onSelectUser(id:string){
    this.selectid = id;
  console.log("Selected the user with id " + id);
   }

  get selectedUser()
{

  return this.users.find((user) => user.id === this.selectid) ;}


  sayHiii(say : string){
    console.log("got the string ",say)
    
  }

}
