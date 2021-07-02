import { Component, OnInit } from '@angular/core';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-newTask',
  templateUrl: 'new-task.page.html',
  styleUrls: ['new-task.page.scss']
})
export class NewTaskPage implements OnInit {
  newTask = {
    title: '',
    desc: '',
    done: false
  };
  constructor(private taskService: TaskService) {}

  ngOnInit() {}

  addTask() {
    // add task to taskList using taskService
    this.taskService.addTask(this.newTask);
  }
}
