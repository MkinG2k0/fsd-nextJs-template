import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'
import { withProviders } from 'core'
import 'core/styles/index.scss'

import type { AppProps } from 'next/app'

import Head from 'next/head'

export default function App({ Component, pageProps }: AppProps) {
	return (
		<>
			<Head>
				<title>Next</title>
			</Head>
			{withProviders(Component)(pageProps)}
		</>
	)
}
