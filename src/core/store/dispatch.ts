import { AnyAction, AsyncThunkAction } from '@reduxjs/toolkit'
import { store } from 'core/store/store'

export const dispatch = (func: AnyAction) => store.dispatch(func)
// TODO AnyAction error thunk
