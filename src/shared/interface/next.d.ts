import { NextApiRequest, NextApiResponse } from 'next'

export interface ApiRequest<Body = any> extends NextApiRequest {
	body: Body
}

export type ApiResponse<T> = NextApiResponse<T>
