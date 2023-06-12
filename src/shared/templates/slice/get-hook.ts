import { useStore } from 'shared'

const useGet = () => useStore((state) => state['FileName'])

export const FileNameHooks = {
	useGet,
}
