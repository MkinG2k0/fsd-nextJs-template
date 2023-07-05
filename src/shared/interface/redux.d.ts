type TStatus = 'fulfilled' | 'idle' | 'pending' | 'rejected'
type TStatusReq = 'error' | 'success'
type TError = null | string | undefined

interface ISet<T> {
	name: T
	value: string
}

interface ReqWrap<T> {
	data: T
	message?: string
	status?: number
}

interface IStatus<T> {
	data?: T
	error?: TError
	status?: TStatus
}

type TID = number | string

interface ID {
	id: TID
}

interface setErrorProp {
	(state: IStatus<any>, action: any): void
}
