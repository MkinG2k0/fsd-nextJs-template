type TStatus = 'idle' | 'pending' | 'fulfilled' | 'rejected'
type TStatusReq = 'error' | 'success'
type TError = string | undefined | null

interface ISet<T> {
	name: T
	value: string
}

interface ReqWrap<T> {
	status?: HttpStatus
	message?: string
	data: T
}

interface IStatus<T> {
	status?: TStatus
	error?: TError
	data?: T
}

type TID = number | string

interface ID {
	id: TID
}

interface setErrorProp {
	(state: IStatus<any>, action: any): void
}
