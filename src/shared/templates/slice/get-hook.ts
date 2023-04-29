import { useStore } from 'shared/hook/Redux'

const useGet = () => useStore((state) => state['FileName'])

export const FileNameHooks = {
	useGet,
}
