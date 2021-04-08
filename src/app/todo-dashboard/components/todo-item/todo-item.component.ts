import {Component, EventEmitter, Input, Output} from '@angular/core';
import {ITodo} from '../../models/todo.model';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent {
  @Input()
  todo: ITodo;

  @Output()
  status: EventEmitter<any> = new EventEmitter<any>();

  @Output()
  onDelete: EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  onStatusClick(todo: ITodo): any {
    this.status.emit(todo);
  }

  onDeleteClick(todo: ITodo): any {
    this.onDelete.emit(todo);
  }
}
