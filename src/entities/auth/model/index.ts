import { slice } from './slice'
import { GetAuth } from './get'

export const { reducer: auth } = slice

export const AuthSlice = { ...slice.actions, ...GetAuth }
