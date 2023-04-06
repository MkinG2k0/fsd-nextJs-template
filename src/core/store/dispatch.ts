import { AnyAction, AsyncThunkAction } from '@reduxjs/toolkit'

import { store } from 'core/store/store'

export const dispatch = (func: AnyAction | AsyncThunkAction<any, any, any>) =>
	store.dispatch(func)
// TODO AnyAction error thunk
// export type AppDispatch = typeof store.dispatch
