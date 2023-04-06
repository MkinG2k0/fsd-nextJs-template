export interface PromiseProps {
	name: string
	promise: Promise<any>
}

export const WrapSSP = async (arrProps: PromiseProps[]) => {
	const props = {}
	const mergePromise = [...arrProps]

	const promise = mergePromise.map(({ promise }) => promise)

	const data = await Promise.all(promise)

	mergePromise.map(({ name }, index) => {
		props[name] = data[index].data
	})

	return { props }
}
