import 'antd/dist/reset.css'
import 'core/styles/index.scss'

import Head from 'next/head'

import type { AppProps } from 'next/app'

import { withProviders } from 'core/providers'
import { useClient } from 'shared/hook/Server'

export default function App({ Component, pageProps }: AppProps) {
	const isClient = useClient()

	return (
		<>
			<Head>
				<title>Next</title>
			</Head>
			{isClient
				? withProviders.client(Component)(pageProps)
				: withProviders.server(Component)(pageProps)}
		</>
	)
}
