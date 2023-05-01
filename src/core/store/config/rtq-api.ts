import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react'
import { getEnvVar } from 'shared/lib'

export const rtqApi = createApi({
	baseQuery: fetchBaseQuery({
		baseUrl: getEnvVar('NEXT_PUBLIC_URL_ENDPOINT'),
		prepareHeaders: (headers, { getState, endpoint }) => {
			// const user = (getState() as RootState).Auth?.login.data
			//
			// if (user && endpoint !== 'refresh') {
			// 	headers.set('Authorization', `Bearer ${user.token}`)
			// }

			return headers
		},
	}),
	tagTypes: ['FileName', 'todo'],

	endpoints: () => ({}),
})
