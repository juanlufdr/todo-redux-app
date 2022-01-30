import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.reducer';
import { Todo } from '../models/todo.model';
import * as actions from '../todo.actions';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css'],
})
export class TodoItemComponent implements OnInit {
  @Input() todo: Todo;

  checkComplete: FormControl;
  textInput: FormControl;

  @ViewChild('inputPhysical') textInputPhysical: ElementRef;

  editing: boolean = false;

  constructor(private _store: Store<AppState>) {}

  ngOnInit(): void {
    //this.todo.complete = true;

    this.checkComplete = new FormControl(this.todo.complete);
    this.textInput = new FormControl(this.todo.text, Validators.required);

    this.checkComplete.valueChanges.subscribe((value) => {
      this._store.dispatch(actions.togle({ id: this.todo.id }));
    });
  }

  editTodoText() {
    this.editing = true;
    this.textInput.setValue(this.todo.text);

    setTimeout(() => {
      this.textInputPhysical.nativeElement.focus();
    }, 1);
  }

  completeEdition() {
    this.editing = false;

    if (this.textInput.invalid || this.textInput.value === this.todo.text) {
      return;
    }

    this._store.dispatch(
      actions.edit({ id: this.todo.id, text: this.textInput.value })
    );
  }

  delete() {
    this._store.dispatch(actions.deleteTodo( {id: this.todo.id}));
  }
}
