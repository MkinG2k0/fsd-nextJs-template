'use client'

import { FC } from 'react'

import { useAuth } from 'entities/auth/hook'

interface authProps {}

export const Auth: FC<authProps> = ({}) => {
	const { isAuth } = useAuth()
	if (isAuth) {
		return <>isAuth</>
	}
	return <>not isAuth</>
}
