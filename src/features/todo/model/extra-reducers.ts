import { ActionReducerMapBuilder } from '@reduxjs/toolkit'

import { fetchTodos } from './thunk'
import { TodoModel } from './model'

import { hydrate, setStatus } from 'shared/lib/redux'

export const extraReducers = (builder: ActionReducerMapBuilder<TodoModel>) => {
	builder
		.addCase(fetchTodos.pending, (state, action) => {
			setStatus(state.todos, action)
		})
		.addCase(fetchTodos.rejected, (state, action) => {
			setStatus(state.todos, action)
		})
		.addCase(fetchTodos.fulfilled, (state, action) => {
			const { payload } = action
			setStatus(state.todos, action)

			state.todos.data = payload
		})

	builder.addCase(hydrate, (state, { payload }) => {
		if (payload.todo.todos) {
			state.todos = payload.todo.todos
		}
	})
}
