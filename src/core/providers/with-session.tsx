import { SessionProvider } from 'next-auth/react'

export const WithSession = (component: FC) => (props) =>
	<SessionProvider session={props.session}>{component(props)}</SessionProvider>
