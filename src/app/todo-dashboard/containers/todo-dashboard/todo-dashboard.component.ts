import { Component, OnInit } from '@angular/core';
import {ITodo, Todo} from '../../models/todo.model';

@Component({
  selector: 'app-todo-dashboard',
  templateUrl: './todo-dashboard.component.html',
  styleUrls: ['./todo-dashboard.component.scss']
})
export class TodoDashboardComponent implements OnInit {
  todoList: ITodo[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  handleAddToTask(task: string): any {
    const itemTask = new Todo(this.getUniqueId(), task, false);
    this.todoList.push(itemTask);
  }

  handleStatusTask(task: ITodo): any {
    task.finished = !task.finished;
  }

  handleDeleteTask(task: ITodo): any {
    const index = this.todoList.indexOf(task);
    this.todoList.splice(index, 1);
  }

  getUniqueId(parts: number = 4): string {
    const stringArr = [];
    for (let i = 0; i < parts; i++){
      // tslint:disable-next-line:no-bitwise
      const S4 = (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
      stringArr.push(S4);
    }
    return stringArr.join('-');
  }
}
