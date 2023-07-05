import { getEnvVar } from 'shared/lib'

import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react'

export const rtqApi = createApi({
	baseQuery: fetchBaseQuery({
		baseUrl: getEnvVar('NEXT_PUBLIC_URL_ENDPOINT'),
		prepareHeaders: (headers, { endpoint, getState }) => {
			// const user = (getState() as RootState).Auth?.login.data
			//
			// if (user && endpoint !== 'refresh') {
			// 	headers.set('Authorization', `Bearer ${user.token}`)
			// }

			return headers
		},
	}),
	endpoints: () => ({}),

	tagTypes: ['FileName', 'todo'],
})
