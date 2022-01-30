import { Pipe, PipeTransform } from '@angular/core';
import { ValidFilters } from '../filter/filter.actions';

@Pipe({
  name: 'filterPipe'
})
export class FilterPipe implements PipeTransform {

  transform(value: ValidFilters): string{
    switch (value) {
      case 'todos':
        return 'Todos';
      case 'pendings':
        return 'Pendientes';
      case 'completeds':
        return 'Completados';
    }
  }

}
