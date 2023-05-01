import { rtqApi } from 'core/store/config/rtq-api'
import { ExampleRoute } from 'shared'

const FileName = rtqApi.injectEndpoints({
	endpoints: (builder) => ({
		// GET: Get all
		getFileName: builder.query<ReqWrap<any>, void>({
			query: () => ExampleRoute.base,
			providesTags: (result) =>
				result
					? [
							...result.data.map(({ id }) => ({
								type: 'FileName' as const,
								id,
							})),
							{ type: 'FileName', id: 'FileName-LIST' },
					  ]
					: [{ type: 'FileName', id: 'FileName-LIST' }],
		}),
		// GET: Get by id
		getFileNameById: builder.query<AxiosReqWrap<any>, TID>({
			query: (id) => ExampleRoute.getById.concat(String(id)),
		}),
		// PUT: Update by id
		updateFileName: builder.mutation<AxiosReqWrap<any>, Omit<any, 'id'>>({
			query: (body) => ({
				url: ExampleRoute.create,
				method: 'PUT',
				body,
			}),
			invalidatesTags: [{ type: 'FileName', id: 'FileName-LIST' }],
		}),
		// DELETE: Delete by id
		deleteFileNameById: builder.mutation<AxiosReqWrap<any>, TID>({
			query: (id) => ({
				url: ExampleRoute.delete.concat(String(id)),
				method: 'DELETE',
			}),
		}),
		// POST: Create
		createFileName: builder.mutation<AxiosReqWrap<any>, Omit<any, 'id'>>({
			query: (body) => ({
				url: ExampleRoute.create,
				method: 'POST',
				body,
			}),
			invalidatesTags: [{ type: 'FileName', id: 'FileName-LIST' }],
		}),
	}),
	overrideExisting: false,
})

export const {
	useGetFileNameQuery,
	useGetFileNameByIdQuery,
	useCreateFileNameMutation,
	useDeleteFileNameByIdMutation,
	useUpdateFileNameMutation,
} = FileName
