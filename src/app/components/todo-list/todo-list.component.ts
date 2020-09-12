import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  todoList: any = [{
    timestamp: Date.now(),
    do: 'comida',
    done: false
  },
  {
    timestamp: Date.now(),
    do: 'comida',
    done: false
  }];

  constructor() { }

  ngOnInit() {
  }

}
