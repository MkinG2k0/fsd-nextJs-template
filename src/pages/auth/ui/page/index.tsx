import { signIn, signOut, useSession } from 'next-auth/react'
import { FC } from 'react'

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
