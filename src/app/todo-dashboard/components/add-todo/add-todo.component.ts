import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.scss']
})
export class AddTodoComponent {
  @Output()
  create: EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  onClickAddTodo(value: string): any {
    this.create.emit(value);
  }
}
