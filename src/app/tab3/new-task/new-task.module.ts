import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NewTaskPage } from './new-task.page';
import { TaskService } from '../task.service';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild([{ path: '', component: NewTaskPage }])
  ],
  declarations: [NewTaskPage],
  providers: [TaskService]
})
export class NewTaskModule { }