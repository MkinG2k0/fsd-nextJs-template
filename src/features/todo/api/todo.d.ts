declare namespace Req_Todo {
	interface Base {}
}

declare namespace Res_Todo {
	interface Base {
		id: number
		userId: number
		title: string
		completed: boolean
	}
}
