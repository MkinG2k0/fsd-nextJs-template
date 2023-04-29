import { createAsyncThunk } from '@reduxjs/toolkit'

export const getFileNameAll = createAsyncThunk<any, undefined>(
	'FileName/getAll',
	async () => {
		return 'FileName'
	},
)
