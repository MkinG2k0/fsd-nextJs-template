import Link from 'next/link'
import { useSession, signIn, signOut } from 'next-auth/react'
import { FC } from 'react'
import { NAV } from 'shared/constant/navigation'

import style from './auth.module.scss'

interface authProps {}

export const Auth: FC<authProps> = ({}) => {
	const { data: session } = useSession()
	if (session) {
		return (
			<>
				Signed in as {session?.user?.email} <br />
				<button onClick={() => signOut()}>Sign out</button>
			</>
		)
	}
	return (
		<>
			Not signed in <br />
			<button onClick={() => signIn()}>Sign in</button>
		</>
	)
}
