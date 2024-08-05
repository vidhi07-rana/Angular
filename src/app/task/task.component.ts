import { Component, Input } from '@angular/core';
import { TaskMoreComponent } from "./task-more/task-more.component";
import { Task } from './task-more/task-more.model';
import { NewTaskComponent } from "./new-task/new-task.component";

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [TaskMoreComponent, NewTaskComponent],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {
  @Input({required:true}) userId! : string
@Input({required: true}) name !: string
isAddingTask = false ;

tasks = [
  {
    id:'t1',
    userId : 'u6',
    title:"Master Angular",
    summary :"Learn basic and advanced feature of Angular",
    dueDate:'2025-09-01'
  },
  {
    id:'t2',
    userId : 'u5',
    title:"Master Python",
    summary :"Learn basic and advanced feature of python",
    dueDate:'2025-10-22'
  },  {
    id:'t3',
    userId : 'u3',
    title:"Master Data Analysis",
    summary :"Learn basic and advanced feature of DA",
    dueDate:'2025-10-10'
  },
  {
    id:'t4',
    userId : 'u2',
    title:"Master Data Analysis",
    summary :"Learn basic and advanced feature of DA",
    dueDate:'2025-10-10'
  }, {
    id:'t5',
    userId : 'u3',
    title:"Master Python",
    summary :"Learn basic and advanced feature of python",
    dueDate:'2025-10-22'
  },
  {
    id:'t6',
    userId : 'u1',
    title:"Master Python",
    summary :"Learn basic and advanced feature of python",
    dueDate:'2025-10-22'
  }
]

get userSaelectedTasks(){
  return this.tasks.filter((task)=> task.userId=== this.userId)
}

onCompleteTask(id: string) {
  console.log(id);
  this.tasks = this.tasks.filter(task => task.id !== id);
}

trackByTaskId(index: number, task: Task): string {
  return task.id;
}

onStartAddTask(){
this.isAddingTask = true;
}
onCancelAddTask(){
  this.isAddingTask= false
}
}
