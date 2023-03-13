const getEnvVar = (key: string) => {
	if (process.env[key] === undefined) {
		throw new Error(`Env variable ${key} is required`)
	}
	return process.env[key] || ''
}

export const API_URL = getEnvVar('NEXT_PUBLIC_URL_ENDPOINT')

export const NODE_ENV = getEnvVar('NEXT_NODE_ENV')

export const isDevEnv = NODE_ENV === 'development'
export const isProdEnv = NODE_ENV === 'production'
