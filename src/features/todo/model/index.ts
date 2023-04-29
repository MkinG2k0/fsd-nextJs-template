import { slice } from './slice'
import { GetTodo } from './get'

export const { reducer: todo } = slice

export const TodoSlice = { ...slice.actions, ...GetTodo }
