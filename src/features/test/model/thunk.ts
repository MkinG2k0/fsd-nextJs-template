import { createAsyncThunk } from '@reduxjs/toolkit'

export const gettestAll = createAsyncThunk<any, undefined>(
	'test/getAll',
	async () => {
		return 'test'
	},
)
