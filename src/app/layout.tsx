import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'
import 'core/styles/index.scss'

import { Layout } from 'entities/layout'

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html>
			<body>
				<Layout>{children}</Layout>
				{/*{WithProviders(children)(children)}*/}
			</body>
		</html>
	)
}
