export const getEnvVar = (key: keyof NodeJS.ProcessEnv | string) => {
	return process.env[key] || ''
}
