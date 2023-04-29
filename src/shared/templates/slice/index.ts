import { slice } from './slice'

import { FileNameHooks } from 'shared/templates/slice/get-hook'

export const { reducer: auth } = slice

export const FileNameSlice = { ...slice.actions, ...FileNameHooks }
