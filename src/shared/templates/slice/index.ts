import { slice } from './slice'
import { FileNameHooks } from './get-hook'
import { fetch } from './thunk'

export const { reducer: auth } = slice

export const FileNameSlice = { ...slice.actions, ...FileNameHooks, ...fetch }
