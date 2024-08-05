import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { UserComponent } from "./user/user.component";
import { DUMMY_USERS } from './dummy-user';
import { ChildComponent } from "./child/child.component";
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { HelloComponent } from "./hello/hello.component";
import { TaskComponent } from "./task/task.component";
import { ChangeDetectorRef } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, UserComponent, ChildComponent, CommonModule, HelloComponent, TaskComponent,NgFor,NgIf],
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
