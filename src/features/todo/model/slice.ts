import { createSlice } from '@reduxjs/toolkit'
import { extraReducers } from 'features/todo/model/extraReducers'

import { initialState } from './init'
import { reducers } from './reducers'

const Index = createSlice({
	name: 'Todo',
	initialState,
	reducers,
	extraReducers,
})

export const { setTodos } = Index.actions

export const todo = Index.reducer
