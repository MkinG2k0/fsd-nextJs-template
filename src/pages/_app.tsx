import 'core/styles/index.scss'
// import 'antd/dist/reset.css'
import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'

import Head from 'next/head'

import type { AppProps } from 'next/app'

import { withProviders } from 'core/providers'

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