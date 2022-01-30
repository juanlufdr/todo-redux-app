import { createAction, props } from '@ngrx/store';

export type ValidFilters= 'todos' | 'completeds' | 'pendings';

export const setFilter = createAction('[FILTER] Set filter',
  props<{filter: ValidFilters}>()
  );
