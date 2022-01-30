import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Todo } from '../models/todo.model';
import { AppState } from '../../app.reducer';
import { ValidFilters } from 'src/app/filter/filter.actions';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
})
export class TodoListComponent implements OnInit {
  todos: Todo[] = [];
  currentFilter: ValidFilters;

  constructor(private _store: Store<AppState>) {}

  ngOnInit(): void {
    //this._store.select('todos').subscribe( todos => this.todos = todos);
    this._store.subscribe(({ todos, filter }) => {
      this.todos = todos;
      this.currentFilter = filter;
    });
  }
}
