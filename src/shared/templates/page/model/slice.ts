import { createSlice } from '@reduxjs/toolkit'

import { initialState } from './init'
import { reducers } from './reducers'

const Index = createSlice({
	name: 'FileName',
	initialState,
	reducers,
})

export const { setTodos } = Index.actions

export const FileNameSlice = Index.reducer
