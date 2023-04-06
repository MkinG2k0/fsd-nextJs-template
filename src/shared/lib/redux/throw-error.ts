export const Error = (status, rejectWithValue: any, dataError: any = 'error') =>
	status.statusText !== 'OK' && rejectWithValue(dataError)
