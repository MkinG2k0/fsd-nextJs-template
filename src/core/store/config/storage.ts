import createWebStorage from 'redux-persist/lib/storage/createWebStorage'

const createNoopStorage = () => {
	return {
		getItem(_key) {
			return Promise.resolve(null)
		},
		removeItem(_key) {
			return Promise.resolve()
		},
		setItem(_key, value) {
			return Promise.resolve(value)
		},
	}
}
export const storage =
	typeof window !== 'undefined' ? createWebStorage('local') : createNoopStorage()
