import { useEffect, useState } from 'react'
import { TOKEN } from 'shared/constant/Auth'

export const getToken = () => {
	return localStorage.getItem(TOKEN)
}

export const removeToken = () => {
	return localStorage.removeItem(TOKEN)
}

export const setToken = (token: string) => {
	localStorage.setItem(TOKEN, token)
}

export const IsAuth = () => {
	// const {token} = Getauth()
	const { token } = { token: 'asd' }
	const [isToken, setIsToken] = useState(Boolean(token))

	useEffect(() => {
		setIsToken(Boolean(token))
	}, [token])

	return {
		isAuth: isToken,
	}
}
