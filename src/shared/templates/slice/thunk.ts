import { http } from 'shared'

import { createAsyncThunk } from '@reduxjs/toolkit'

const fetchFileName = createAsyncThunk<any, undefined>('FileName/getAll', async () => {
	const data = await http.get('')
	return data.data
})

export const FileNameFetch = {
	fetchFileName,
}
