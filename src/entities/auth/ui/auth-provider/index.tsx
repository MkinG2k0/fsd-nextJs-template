import { useSession } from 'next-auth/react'

interface authProviderProps {}

export const AuthProvider: FC<authProviderProps> = ({ children }) => {
	const { data: session } = useSession()
	const email = session?.user?.email

	return <>{children}</>
}
