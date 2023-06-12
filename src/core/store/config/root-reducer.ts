import { combineReducers } from '@reduxjs/toolkit'

import { rtqApi } from './rtq-api'

import { auth } from 'entities/auth'
import { layout } from 'entities/layout'

export const rootReducer = combineReducers({
	[rtqApi.reducerPath]: rtqApi.reducer,
	auth,
	layout,
})
