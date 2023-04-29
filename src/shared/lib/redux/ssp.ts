import { GetServerSidePropsContext } from 'next'

import { wrapper } from 'core'
import { headerProps } from 'shared'

type propCall = (
	store: AppStore,
	ctx: GetServerSidePropsContext,
) => { props?: object; promise: Promise<any>[] }

export const ReduxSSP = (func: propCall) => {
	return (ctx) =>
		wrapper.getServerSideProps((store) => async () => {
			const resultFunc = func(store, ctx)
			const promise = resultFunc.promise || []
			const props = resultFunc.props || {}
			const mergePromise = [...headerProps(store), ...promise]

			await Promise.all(mergePromise)

			return { props }
		})(ctx)
}
