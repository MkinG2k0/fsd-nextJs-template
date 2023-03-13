import { ConfigureStoreOptions } from '@reduxjs/toolkit/src/configureStore'
import { api } from 'core/store/config/api'
import { rtkQueryAuthMiddleware } from 'core/store/middleware/auth'
import { serializable } from 'core/store/middleware/serializable'

const middleware = (getDefaultMiddleware) =>
	getDefaultMiddleware(serializable)
		.concat(api.middleware)
		.concat(rtkQueryAuthMiddleware)

export default middleware