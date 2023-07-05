import { GetLayout } from './get'
import { slice } from './slice'

export const { reducer: layout } = slice

export const LayoutSlice = { ...slice.actions, ...GetLayout }
