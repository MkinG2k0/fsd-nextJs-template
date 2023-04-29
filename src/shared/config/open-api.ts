import type { ConfigFile } from '@rtk-query/codegen-openapi'

import { generateFilesApi } from 'shared'

const config: ConfigFile = {
	schemaFile: 'http://linc/swagger-json',
	apiFile: 'app/store/config/api.ts',
	apiImport: 'api',
	outputFile: '../generated/genApi.ts',
	exportName: 'genApi',
	argSuffix: '_arg',
	responseSuffix: '_res',
	hooks: true,
	tag: true,
	outputFiles: generateFilesApi('../generated/api/', 'Tag-name'),
}

export default config
