import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { NewTaskData } from '../task-more/task-more.model';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-new-task',
 
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent {
  @Input({required:true})userId! :string
@Output() cancel = new EventEmitter<void>()
@Output() add = new EventEmitter<NewTaskData>()
enteredTitle = '';
enteredSummary='';
enterDueDate='';
private taskService = inject(TasksService)
  onCancel(){
this.cancel.emit();
  }

  onSubmit(){
    this.taskService.addTask({
      title:this.enteredTitle,
      summary:this.enteredSummary,
      date:this.enterDueDate
    },this.userId);
    this.cancel.emit();
  }


}
