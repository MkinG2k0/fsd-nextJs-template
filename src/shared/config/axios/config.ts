export const AxiosConfig = {
	baseURL: process.env.NEXT_PUBLIC_URL_ENDPOINT,
	timeout: 10000,
	headers: {
		Accept: 'application/json',
		'Content-Type': 'application/json',
	},
}
