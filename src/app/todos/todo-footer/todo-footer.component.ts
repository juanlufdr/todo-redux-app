import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';
import * as actions from '../../filter/filter.actions';
import * as todoActions from '../todo.actions';

@Component({
  selector: 'app-todo-footer',
  templateUrl: './todo-footer.component.html',
  styleUrls: ['./todo-footer.component.css']
})
export class TodoFooterComponent implements OnInit {

  currentFilter: actions.ValidFilters = 'todos';

  filters: actions.ValidFilters[] = ['todos', 'completeds', 'pendings'];

  pendingsTodo: number = 0;

  constructor( private _store: Store<AppState>) { }

  ngOnInit(): void {

    //this._store.select('filter').subscribe( filter => this.currentFilter = filter);
    this._store.subscribe( state => {
      this.currentFilter = state.filter;
      this.pendingsTodo = state.todos.filter( todo => !todo.complete).length;
    });
  }

  changeFilter(filter: actions.ValidFilters) {
    this._store.dispatch(actions.setFilter({filter}));
  }

  cleanCompleteds() {
    this._store.dispatch(todoActions.cleanCompleted());
  }

}
