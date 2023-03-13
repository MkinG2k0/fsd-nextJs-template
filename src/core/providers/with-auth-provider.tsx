import { AuthProvider } from 'entities/auth'

export const WithAuthProvider = (component: FC) => (props) =>
	<AuthProvider>{component(props)}</AuthProvider>
