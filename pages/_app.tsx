import 'core/styles/index.scss'
import 'antd/dist/reset.css'
import { Skeleton } from 'antd'
import { withProviders } from 'core/providers'
import { store } from 'core/store'
import { persist } from 'core/store/config'
import { Layout } from 'entities/layout'
import Head from 'next/head'
import { SessionProvider } from 'next-auth/react'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'

import { useClient } from 'shared/hook/Server'
import type { AppProps } from 'next/app'

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
			{/*{isClient ? (*/}
			{/*	<Provider store={store}>*/}
			{/*		<PersistGate persistor={persist} loading={<Skeleton />}>*/}
			{/*			<SessionProvider session={pageProps.session}>*/}
			{/*				<Layout>*/}
			{/*					<Component {...pageProps} />*/}
			{/*				</Layout>*/}
			{/*			</SessionProvider>*/}
			{/*		</PersistGate>*/}
			{/*	</Provider>*/}
			{/*) : (*/}
			{/*	<Provider store={store}>*/}
			{/*		<SessionProvider session={pageProps.session}>*/}
			{/*			<Layout>*/}
			{/*				<Component {...pageProps} />*/}
			{/*			</Layout>*/}
			{/*		</SessionProvider>*/}
			{/*	</Provider>*/}
			{/*)}*/}
		</>
	)
}
