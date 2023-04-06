import { getServerSession } from 'next-auth/next'

import { authOptions } from './auth/[...nextauth]'

import { ApiRequest, ApiResponse } from 'shared/interface/next'

export default async function handler(
	req: ApiRequest<any>,
	res: ApiResponse<ReqWrap<Res_Todo.Base[]>>,
) {
	const session = await getServerSession(req, res, authOptions)

	res.status(200).json({
		data: [
			{ title: 'Title 1', id: 0, userId: 0, completed: true },
			{ title: 'Title 2', id: 1, userId: 0, completed: true },
			{ title: 'Title 3', id: 2, userId: 0, completed: false },
		],
	})
}