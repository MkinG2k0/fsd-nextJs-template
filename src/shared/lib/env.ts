export const getEnvVar = (key: string) => {
	if (process.env[key] === undefined) {
		throw new Error(`Env variable ${key} is required`)
	}
	return process.env[key] || ''
}
