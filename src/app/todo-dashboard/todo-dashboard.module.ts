import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TodoDashboardComponent} from './containers/todo-dashboard/todo-dashboard.component';
import {AddTodoComponent} from './components/add-todo/add-todo.component';
import {TodoCountComponent} from './components/todo-count/todo-count.component';
import {TodoItemComponent} from './components/todo-item/todo-item.component';

const declarations = [
  TodoDashboardComponent,
  AddTodoComponent,
  TodoCountComponent,
  TodoItemComponent
];

@NgModule({
  declarations: [...declarations],
  imports: [CommonModule],
  exports: [...declarations],
})
export class TodoDashboardModule {
}
