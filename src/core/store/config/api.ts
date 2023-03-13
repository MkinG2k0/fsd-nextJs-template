import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react'

export const api = createApi({
	baseQuery: fetchBaseQuery({
		baseUrl: process.env.NEXT_PUBLIC_URL_ENDPOINT,
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
