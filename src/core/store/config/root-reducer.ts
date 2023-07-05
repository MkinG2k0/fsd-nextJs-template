import { rtqApi } from './rtq-api'

import { layout } from 'entities/layout'
import { auth } from 'entities/auth'

import { combineReducers } from '@reduxjs/toolkit'

export const rootReducer = combineReducers({
	auth,
	layout,
	[rtqApi.reducerPath]: rtqApi.reducer,
})
