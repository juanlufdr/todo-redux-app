import { createAction, props } from "@ngrx/store";


export const create = createAction('[TODO] Crear todo', props<{text: string}>());

export const togle = createAction('[TODO] Togle Todo', props<{id: number}>());

export const edit = createAction('[TODO] Edit Todo', props<{id: number, text: string}>());

export const deleteTodo = createAction('[TODO] Delete Todo', props<{id: number}>());

export const toggleAll = createAction('[TODO] Toggle All Todo', props<{isComplete: boolean}>());

export const cleanCompleted = createAction('[TODO] Clean Completed Todo');
