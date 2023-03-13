import { createSlice } from '@reduxjs/toolkit'

import { initialState } from './init'
import { reducers } from './reducers'

import { extraReducers } from 'features/todo/model/extraReducers'

const Index = createSlice({
	name: 'Todo',
	initialState,
	reducers,
	extraReducers,
})

export const { setTodos } = Index.actions

export const todo = Index.reducer
