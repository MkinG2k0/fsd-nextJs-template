import { isClient } from 'shared/lib/server'

const get = <T>(name: string, or: T) => {
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

export const set = (name: string, data: any) => {
	if (isClient()) {
		localStorage.setItem(name, JSON.stringify(data))
	}
}

export const LocalStorage = {
	get,
	set,
}
