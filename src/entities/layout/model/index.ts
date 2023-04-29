import { slice } from './slice'
import { GetLayout } from './get'

export const { reducer: layout } = slice

export const LayoutSlice = { ...slice.actions, ...GetLayout }
