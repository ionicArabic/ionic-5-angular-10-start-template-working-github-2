import { Component, OnInit } from '@angular/core';
import { TaskService } from './task.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit {
  taskList = [
    {
      title: 'عنوان المهمة الأولى',
      desc: 'وصف المهمة الأولى',
      done: false
    },
    {
      title: 'عنوان المهمة الثانية',
      desc: 'وصف المهمة الثانية',
      done: false
    },
    {
      title: 'عنوان المهمة الثالثة',
      desc: 'وصف المهمة الثالثة',
      done: false
    }
  ];
  // initialize taskService in constructor
  constructor(private taskService: TaskService) {}

  ngOnInit() {
    // get taskList from taskService
    this.taskList = this.taskService.getTasks();
  }

  deleteTask(task) {
    // delete a task using taskService
    this.taskService.deleteTask(task);
  }
}
