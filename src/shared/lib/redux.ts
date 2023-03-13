export const setStatus: setErrorProp = (state, action, status) => {
	state.status = status
	if (status === 'rejected') state.error = action?.payload
	else state.error = undefined
}

export const Error = (status, rejectWithValue: any, dataError: any = 'error') =>
	status.statusText !== 'OK' && rejectWithValue(dataError)
