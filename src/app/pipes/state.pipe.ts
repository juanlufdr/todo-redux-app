import { Pipe, PipeTransform } from '@angular/core';
import { ValidFilters } from '../filter/filter.actions';
import { Todo } from '../todos/models/todo.model';

@Pipe({
  name: 'stateTodo'
})
export class StatePipe implements PipeTransform {

  transform(value: Todo[], filter: ValidFilters): Todo[] {

    switch (filter) {
        case 'completeds':
        return value.filter(todo => todo.complete);
        case 'pendings':
        return value.filter(todo => !todo.complete);

      default:
        return value;
    }

  }

}
