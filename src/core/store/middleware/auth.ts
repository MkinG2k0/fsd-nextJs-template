import type { Middleware, MiddlewareAPI } from '@reduxjs/toolkit'

export const rtkQueryAuthMiddleware: Middleware = (api: MiddlewareAPI) => (next) => (action) => {
	if (action?.payload?.status === 401) {
		// TODO Logic
		// const refreshToken = getRefToken()
		//
		// store.dispatch(fetchRefresh(refreshToken))
	}

	return next(action)
}
