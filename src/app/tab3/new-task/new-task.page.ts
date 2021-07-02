import { Component, OnInit } from '@angular/core';

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
  constructor() {}
  
ngOnInit() {

}

}
