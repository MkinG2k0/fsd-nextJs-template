/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
	images: {
		domains: [],
	},
	// compiler: {
	// 	removeConsole: {
	// 		exclude: ['error', 'warn'],
	// 	},
	// },
}

module.exports = nextConfig
