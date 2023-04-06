import NextAuth, { NextAuthOptions } from 'next-auth'
import GithubProvider from 'next-auth/providers/github'
import GoogleProvider from 'next-auth/providers/google'

export const authOptions: NextAuthOptions = {
	providers: [
		/* EmailProvider({
		 server: process.env.EMAIL_SERVER,
		 from: process.env.EMAIL_FROM,
		 }),
		 // Temporarily removing the Apple provider from the demo site as the
		 // callback URL for it needs updating due to Vercel changing domains

		 Providers.Apple({
		 clientId: process.env.APPLE_ID,
		 clientSecret: {
		 appleId: process.env.APPLE_ID,
		 teamId: process.env.APPLE_TEAM_ID,
		 privateKey: process.env.APPLE_PRIVATE_KEY,
		 keyId: process.env.APPLE_KEY_ID,
		 },
		 }),
		 */
		GithubProvider({
			clientId: process.env.GITHUB_ID,
			clientSecret: process.env.GITHUB_SECRET,
		}),
		GoogleProvider({
			clientId: process.env.GOOGLE_ID,
			clientSecret: process.env.GOOGLE_SECRET,
		}),
	],
	theme: {
		colorScheme: 'light',
	},
	secret: process.env.JWT_SECRET,
	callbacks: {
		signIn: (params) => {
			return true
		},
		async jwt({ token }) {
			token.userRole = 'admin'
			return token
		},
	},
}

export default NextAuth(authOptions)
