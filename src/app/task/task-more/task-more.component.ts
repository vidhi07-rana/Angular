import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { Task } from './task-more.model';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-task-more',
  templateUrl: './task-more.component.html',
  styleUrl: './task-more.component.css'
})
export class TaskMoreComponent {
@Input({required:true}) task! : Task;
// @Output() complete = new EventEmitter<string>()
private taskService = inject(TasksService)

onCompleteTask() {
this.taskService.removeTask(this.task.id)}
}
