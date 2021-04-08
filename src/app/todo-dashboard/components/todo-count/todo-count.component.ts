import {Component, Input} from '@angular/core';
import {ITodo} from '../../models/todo.model';

@Component({
  selector: 'app-todo-count',
  templateUrl: './todo-count.component.html',
  styleUrls: ['./todo-count.component.scss']
})
export class TodoCountComponent {
  @Input()
  todos: ITodo[];

  constructor() { }
}
