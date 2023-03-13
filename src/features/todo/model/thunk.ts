import { createAsyncThunk } from '@reduxjs/toolkit'
import { RTodo } from 'features/todo/api'

export const getTodos = createAsyncThunk<any, undefined>(
	'todo/getAll',
	async () => {
		const response = await RTodo.getAll({})
		return response.data
	},
)
