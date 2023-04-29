import { api } from 'core'
import { TodoRoute, ExampleRoute } from 'shared'
import { http } from 'shared/config/axios'

const getAll = (data: Req_Todo.Base): AxiosReqWrap<Res_Todo.Base[]> =>
	http.get(TodoRoute.get, data)

export const RTodo = {
	getAll,
}

const Todo = api.injectEndpoints({
	endpoints: (builder) => ({
		// GET: Get all
		getTodo: builder.query<ReqWrap<Res_Todo.Base[]>, void>({
			query: () => 'todos',
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
		getFileNameById: builder.query<ReqWrap<Res_Todo.Base>, TID>({
			query: (id) => ExampleRoute.getById.concat(String(id)),
		}),
		// PUT: Update by id
		updateFileName: builder.mutation<
			ReqWrap<Res_Todo.Base>,
			Omit<Res_Todo.Base, 'id'>
		>({
			query: (body) => ({
				url: ExampleRoute.create,
				method: 'PUT',
				body,
			}),
			invalidatesTags: [{ type: 'FileName', id: 'FileName-LIST' }],
		}),
		// DELETE: Delete by id
		deleteFileNameById: builder.mutation<ReqWrap<Res_Todo.Base>, TID>({
			query: (id) => ({
				url: ExampleRoute.delete.concat(String(id)),
				method: 'DELETE',
			}),
		}),
		// POST: Create
		createFileName: builder.mutation<
			ReqWrap<Res_Todo.Base>,
			Omit<Res_Todo.Base, 'id'>
		>({
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
	useGetTodoQuery,
	useGetFileNameByIdQuery,
	useCreateFileNameMutation,
	useDeleteFileNameByIdMutation,
	useUpdateFileNameMutation,
} = Todo
