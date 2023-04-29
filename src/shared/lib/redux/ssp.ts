import { GetServerSidePropsContext } from 'next'

import { wrapper } from 'core/store'
import { HeaderProps } from 'shared/constant/HeaderProps'

type propCall = (
	store: AppStore,
	ctx: GetServerSidePropsContext,
) => { props?: Object; promise: Promise<any>[] }

export const ReduxSSP = (func: propCall) => {
	return (ctx) =>
		wrapper.getServerSideProps((store) => async () => {
			const resultFunc = func(store, ctx)
			const promise = resultFunc.promise || []
			const props = resultFunc.props || {}
			const mergePromise = [...HeaderProps(store), ...promise]

			await Promise.all(mergePromise)

			return { props }
		})(ctx)
}
