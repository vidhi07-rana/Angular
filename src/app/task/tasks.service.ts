import { Injectable } from '@angular/core';
import { NewTaskData } from './task-more/task-more.model';

@Injectable({
  providedIn: 'root'
})
export class TasksService {
private tasks = [
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
  constructor() {
    const tasks = localStorage.getItem('tasks')

    if(tasks){
      this.tasks = JSON.parse(tasks);
    }
   }

  getUser(userId:string){
    return this.tasks.filter((task)=> task.userId=== userId)

  }


  addTask(taskData:NewTaskData ,userId:string){
    this.tasks.unshift({
      id: new Date().getTime().toString(),
      userId:userId,
      title:taskData.title,
      summary:taskData.summary,
      dueDate:taskData.date,
      
    })
    this.saveTasks();
  }

  removeTask(id:string){
    this.tasks = this.tasks.filter(task => task.id !== id);
this.saveTasks();
  }

  private saveTasks(){
    localStorage.setItem('tasks', JSON.stringify(this.tasks))
  }
}
