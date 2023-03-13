import { getServerSession } from 'next-auth/next'
import { ApiRequest, ApiResponse } from 'shared/Interface/next'
import { authOptions } from './auth/[...nextauth]'
import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
	req: ApiRequest<any>,
	res: ApiResponse<ReqWrap<Res_Todo.Base[]>>,
) {
	const session = await getServerSession(req, res, authOptions)
	// console.log(session)
	res.status(200).json({
		data: [
			{ title: 'Title 1', id: 0, userId: 0, completed: true },
			{ title: 'Title 2', id: 1, userId: 0, completed: true },
			{ title: 'Title 3', id: 2, userId: 0, completed: false },
		],
	})
}
