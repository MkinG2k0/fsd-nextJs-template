import { ExampleRoute } from 'shared'

import { rtqApi } from 'core/store/config/rtq-api'

const FileName = rtqApi.injectEndpoints({
	endpoints: (builder) => ({
		// POST: Create
		createFileName: builder.mutation<AxiosReqWrap<any>, Omit<any, 'id'>>({
			invalidatesTags: [{ id: 'FileName-LIST', type: 'FileName' }],
			query: (body) => ({
				body,
				method: 'POST',
				url: ExampleRoute.create,
			}),
		}),
		// DELETE: Delete by id
		deleteFileNameById: builder.mutation<AxiosReqWrap<any>, TID>({
			query: (id) => ({
				method: 'DELETE',
				url: ExampleRoute.delete.concat(String(id)),
			}),
		}),
		// GET: Get all
		getFileName: builder.query<ReqWrap<any>, void>({
			providesTags: (result) =>
				result
					? [
							...result.data.map(({ id }) => ({
								id,
								type: 'FileName' as const,
							})),
							{ id: 'FileName-LIST', type: 'FileName' },
					  ]
					: [{ id: 'FileName-LIST', type: 'FileName' }],
			query: () => ExampleRoute.base,
		}),
		// GET: Get by id
		getFileNameById: builder.query<AxiosReqWrap<any>, TID>({
			query: (id) => ExampleRoute.getById.concat(String(id)),
		}),
		// PUT: Update by id
		updateFileName: builder.mutation<AxiosReqWrap<any>, Omit<any, 'id'>>({
			invalidatesTags: [{ id: 'FileName-LIST', type: 'FileName' }],
			query: (body) => ({
				body,
				method: 'PUT',
				url: ExampleRoute.create,
			}),
		}),
	}),
	overrideExisting: false,
})

export const {
	useCreateFileNameMutation,
	useDeleteFileNameByIdMutation,
	useGetFileNameByIdQuery,
	useGetFileNameQuery,
	useUpdateFileNameMutation,
} = FileName
