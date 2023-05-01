import { AnyAction, AsyncThunkAction } from '@reduxjs/toolkit'

import { store } from './store'

export const dispatch = (func: AnyAction | AsyncThunkAction<any, any, any>) =>
	store.dispatch(func)

// export const storeDispatch = store.dispatch
// TODO AnyAction error thunk
// export type AppDispatch = typeof store.dispatch
