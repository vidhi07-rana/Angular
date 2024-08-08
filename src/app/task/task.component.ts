import { Component, Input } from '@angular/core';
import { NewTaskData, Task } from './task-more/task-more.model';
import { TasksService } from './tasks.service';
@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {
  @Input({required:true}) userId! : string
@Input({required: true}) name !: string
isAddingTask = false ;

constructor(private taskService:TasksService){}

get userSaelectedTasks(){
  return this.taskService.getUser(this.userId);
}

onCompleteTask(id: string) {
  console.log(id);
  this.taskService.removeTask(id);
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
