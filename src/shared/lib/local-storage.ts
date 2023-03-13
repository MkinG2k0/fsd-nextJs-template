import { isClient } from 'shared/lib/server'

export const getStorage = <T>(name: string, or: T) => {
	let data: T = or

	if (isClient()) {
		const dataStorage = localStorage.getItem(name)
		if (dataStorage) {
			data = JSON.parse(dataStorage)
		} else {
			// setStorage(name, JSON.stringify(or))
		}
	}

	return data
}

export const setStorage = (name: string, data: any) => {
	if (isClient()) {
		localStorage.setItem(name, data)
	}
}
