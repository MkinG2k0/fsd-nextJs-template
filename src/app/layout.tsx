import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'
import 'core/styles/index.scss'

// import { withProviders } from 'core'

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<div>
			asdsaфыв
			{children}
			{/*{withProviders(Component)(pageProps)}*/}
		</div>
	)
}
