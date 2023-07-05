export declare namespace Req_Auth {
	interface Login {
		email: string
		password: string
		token: string
	}

	interface Refresh {}
}

export declare namespace Res_Auth {
	interface Login {
		token: string
	}

	interface Refresh {
		token: string
	}
}
