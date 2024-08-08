import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header/header.component";
import { UserComponent } from "./user/user.component";
import { ChildComponent } from "./child/child.component";
import { TaskComponent } from "./task/task.component";
import { NewTaskComponent } from "./task/new-task/new-task.component";
import { TaskMoreComponent } from "./task/task-more/task-more.component";
import { SharedModule } from "./shared/card/shared.module";

@NgModule({
  declarations:[AppComponent,HeaderComponent,UserComponent,ChildComponent,TaskComponent,TaskMoreComponent,NewTaskComponent],
  bootstrap:[AppComponent],
  imports : [BrowserModule, FormsModule,SharedModule]
}) 



export class AppModule{

}