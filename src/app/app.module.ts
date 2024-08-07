import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header/header.component";
import { UserComponent } from "./user/user.component";
import { ChildComponent } from "./child/child.component";
import { TaskComponent } from "./task/task.component";
import { NewTaskComponent } from "./task/new-task/new-task.component";
import { TaskMoreComponent } from "./task/task-more/task-more.component";

@NgModule({
  declarations:[AppComponent],
  bootstrap:[AppComponent],
  imports : [BrowserModule, HeaderComponent, UserComponent ,ChildComponent, TaskComponent,NewTaskComponent,TaskMoreComponent ]
})



export class AppModule{

}