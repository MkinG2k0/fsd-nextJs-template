import { slice } from './slice'
import { Gettest } from './get'

export const { reducer: auth } = slice

export const testSlice = { ...slice.actions, ...Gettest }
