import { createAsyncThunk } from '@reduxjs/toolkit'

import { http } from 'shared'

const fetchFileName = createAsyncThunk<any, undefined>('FileName/getAll', async () => {
	const data = await http.get('')
	return data.data
})

export const FileNameFetch = {
	fetchFileName,
}
