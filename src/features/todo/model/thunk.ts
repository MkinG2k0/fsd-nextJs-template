import { createAsyncThunk } from '@reduxjs/toolkit'

import { RTodo } from 'features/todo'

export const fetchTodos = createAsyncThunk('todo/getAll', async () => {
	const response = await RTodo.getAll({})
	return response.data.data
})

export const fetch = {
	fetchTodos,
}
