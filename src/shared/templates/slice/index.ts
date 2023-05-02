import { FileNameHooks } from './get-hook'
import { FileNameActions } from './slice'
import { FileNameFetch } from './thunk'

export const FileNameSlice = {
	...FileNameActions,
	...FileNameHooks,
	...FileNameFetch,
}

export { FileName } from './slice'
export * from './types'
