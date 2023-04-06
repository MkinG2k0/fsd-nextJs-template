import { GetServerSideProps } from 'next'

import { ReduxSSP } from 'shared/lib/redux'
import { Auth } from 'flat-pages/auth'

export const getServerSideProps: GetServerSideProps = ReduxSSP((store) => ({
	promise: [],
}))

export default function Index() {
	return <Auth />
}
