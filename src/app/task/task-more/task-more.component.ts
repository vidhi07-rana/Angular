import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Task } from './task-more.model';


@Component({
  selector: 'app-task-more',
  standalone: true,
  imports: [],
  templateUrl: './task-more.component.html',
  styleUrl: './task-more.component.css'
})
export class TaskMoreComponent {
@Input({required:true}) task! : Task;
@Output() complete = new EventEmitter<string>()

onCompleteTask() {
  this.complete.emit(this.task.id);
}
}
