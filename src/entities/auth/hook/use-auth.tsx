import { AuthSlice } from 'entities/auth'

export const useAuth = () => {
	const { auth } = AuthSlice.useGet()

	return { isAuth: Boolean(auth.data?.token) }
}
