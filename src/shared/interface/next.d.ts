type NextApiRequest = import('next').NextApiRequest
type NextApiResponse = import('next').NextApiResponse

interface ApiRequest<Body = any> extends NextApiRequest {
	body: Body
}

type ApiResponse<T> = NextApiResponse<T>
