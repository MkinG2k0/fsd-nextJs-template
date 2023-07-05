export const AxiosConfig = {
	baseURL: process.env.NEXT_PUBLIC_URL_ENDPOINT,
	headers: {
		Accept: 'application/json',
		'Content-Type': 'application/json',
	},
	timeout: 10000,
}
