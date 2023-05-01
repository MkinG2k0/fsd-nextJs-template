export const getEnvVar = (key: string | keyof NodeJS.ProcessEnv) => {
	// console.log(process.env.NEXT_PUBLIC_URL_ENDPOINT)
	// if (process.env[key] === undefined) {
	// 	throw new Error(`Env variable ${key} is required`)
	// }
	return process.env[key] || ''
}
