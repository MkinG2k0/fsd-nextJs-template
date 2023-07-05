import type { ConfigFile } from '@rtk-query/codegen-openapi'

import { generateFilesApi } from 'shared'

const config: ConfigFile = {
	apiFile: 'app/store/config/api.ts',
	apiImport: 'rtqApi',
	argSuffix: '_arg',
	exportName: 'genApi',
	hooks: true,
	outputFile: '../generated/genApi.ts',
	outputFiles: generateFilesApi('../generated/api/', 'Tag-name'),
	responseSuffix: '_res',
	schemaFile: 'http://link/swagger-json',
	tag: true,
}

export default config
