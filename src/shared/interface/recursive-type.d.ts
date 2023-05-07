type ReplaceData<T, Replace> = {
	[P in keyof T]: T[P] extends object ? Replace | ReplaceData<T[P], Replace> : Replace
}

export type ReplacePromise<T> = ReplaceData<T, Promise<any>>
export type ReplaceBoolean<T> = ReplaceData<T, boolean>
