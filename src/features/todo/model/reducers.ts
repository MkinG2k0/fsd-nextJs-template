import { PayloadAction } from '@reduxjs/toolkit'

export const reducers = {
	setTodos(state: TodoModel, { payload }: PayloadAction<Res_Todo.Base[]>) {
		state.todos = payload
	},
}
