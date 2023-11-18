import { Component } from '@angular/core';
import { Task } from './add-task/task';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  todo: Task[] = [
    {
      title: 'Buy milk',
      description: 'Go to the store and buy milk',
      date: '11/23/2023',
      priority: 'High',
      status: 'Done'
    },
    {
      title: 'Create a Kanban app',
      description: 'Use Angular to create a Kanban app!',
      date: '11/23/2023',
      priority: 'High',
      status: 'Done'
    }
  ];
}
