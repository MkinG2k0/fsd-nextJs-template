import { rtkQueryAuthMiddleware } from './auth'
import { serializable } from './serializable'

import { api } from 'core'

export const middleware = <T>(getDefaultMiddleware) =>
	getDefaultMiddleware(serializable)
		.concat(api.middleware)
		.concat(rtkQueryAuthMiddleware)

export * from './serializable'
export * from './auth'
