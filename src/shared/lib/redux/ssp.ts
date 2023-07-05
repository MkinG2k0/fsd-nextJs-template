import { headerProps } from 'shared'

import { GetServerSidePropsContext } from 'next'
import { nextReduxWrapper } from 'core'

type propCall = (
	store: AppStore,
	ctx: GetServerSidePropsContext
) => { promise: Promise<any>[]; props?: object }

export const reduxSSP = (func: propCall) => {
	return (ctx) =>
		nextReduxWrapper.getServerSideProps((store) => async () => {
			const resultFunc = func(store, ctx)
			const promise = resultFunc.promise || []
			const props = resultFunc.props || {}
			const mergePromise = [...headerProps(store), ...promise]

			await Promise.all(mergePromise)

			return { props }
		})(ctx)
}
