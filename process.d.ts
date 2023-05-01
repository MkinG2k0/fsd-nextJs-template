declare namespace NodeJS {
	export interface ProcessEnv {
		// auth
		NEXTAUTH_URL: string
		NEXTAUTH_SECRET: string
		GITHUB_ID: string
		GITHUB_SECRET: string
		FACEBOOK_ID: string
		FACEBOOK_SECRET: string
		TWITTER_ID: string
		TWITTER_SECRET: string
		GOOGLE_ID: string
		GOOGLE_SECRET: string
		AUTH0_ID: string
		AUTH0_SECRET: string
		// db
		DB_HOST: string
		DB_USER: string
		DB_PASS: string
		DATABASE_URL: string
		JWT_SECRET: string
		// custom
		NEXT_PUBLIC_URL_ENDPOINT: string
	}
}
