import { createAsyncThunk } from '@reduxjs/toolkit'

export const fetchFileNameAll = createAsyncThunk<any, undefined>(
	'FileName/getAll',
	async () => {
		return 'FileName'
	}
)

export const fetch = {
	fetchFileNameAll,
}
