import { OutputFileOptions } from '@rtk-query/codegen-openapi/lib/types'

type TFilterObj = { [p: string]: Omit<OutputFileOptions, 'outputFile'> }

export const generateFilesApi = (path: string, ...names: string[]) => {
	const filter: TFilterObj = {}

	names.map((value) => {
		filter[`${path}${value}.ts`] = {
			filterEndpoints: (name, data) => {
				return data.operation.tags?.includes(value) || false
			},
		}
	})

	return filter
}
