import { PayloadAction } from '@reduxjs/toolkit'

import { TodoModel } from './model'

export const reducers = {
	setTodos(state: TodoModel, { payload }: PayloadAction<Res_Todo.Base[]>) {
		state.todos.data = payload
	},
}
