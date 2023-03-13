import { AnyAction } from '@reduxjs/toolkit'

import { store } from 'core/store/store'
import { HeaderProps } from 'shared/constant/HeaderProps'

export interface PromiseProps {
	name: string
	promise: Promise<any>
}

export const WrapSSP = async (arrProps: PromiseProps[]) => {
	const props = {}
	const mergePromise = [...HeaderProps, ...arrProps]

	const promise = mergePromise.map(({ promise }) => promise)

	const data = await Promise.all(promise)

	mergePromise.map(({ name }, index) => {
		props[name] = data[index].data
	})

	return { props }
}

export const wrapSSPWithRedux = async (arrDispatch: any[]) => {
	arrDispatch.map((value) => console.log(value))
	await Promise.all(arrDispatch)

	return {
		props: { initialState: store.getState() },
	}
}

export const Test = async (
	data: ReplaceBoolean<Partial<RootState>>,
	arr: any[],
) => {
	return {
		props: { initialState: store.getState(), data },
	}
}

export const isClient = () => typeof window !== 'undefined'

type ReplaceData<T, Replace = any> = {
	[P in keyof T]: T[P] extends Object
		? Replace | ReplaceData<T[P]>
		: ReplaceData<T[P]>
}

export type ReplacePromise<T> = ReplaceData<T, Promise<any>>
export type ReplaceAnyAction<T> = ReplaceData<T, AnyAction>
export type ReplaceBoolean<T> = ReplaceData<T, boolean>

const aaa: ReplaceData<{
	asd: { aa: string; gg: boolean }
	ggg: { asd: 'asd' }
}> = {
	asd: new Promise(() => {}),
	ggg: new Promise(() => {}),
}
