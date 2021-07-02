import { Component } from '@angular/core';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
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
  constructor() {}

}
