import { getTodos } from 'features/todo/model/thunk'

export const extraReducers = (builder) => {
	builder
		.addCase(getTodos.pending, (state) => {})
		.addCase(getTodos.fulfilled, (state, { payload }) => {
			state.todos = payload
		})
		.addCase(getTodos.rejected, (state) => {})
}
