import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoComponent } from '../components/todo/todo.component';
import { TodoPageComponent } from './todo-page/todo-page.component';



@NgModule({
  declarations: [
    TodoPageComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PagesModule { }
