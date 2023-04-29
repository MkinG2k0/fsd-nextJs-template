import { slice } from './slice'
import { getTodo } from './get'
import { fetch } from './thunk'

export const { reducer: todo } = slice

export const TodoSlice = { ...slice.actions, ...getTodo, ...fetch }
