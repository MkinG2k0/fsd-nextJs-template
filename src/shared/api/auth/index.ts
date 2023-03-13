import { Req } from 'shared/Interface/Axios'
import { AuthRoute } from 'shared/constant/routes'
import { http } from 'shared/lib/axios/http'

const login = (data: Req_Auth.Login): Req<Res_Auth.Login> =>
	http.post(AuthRoute.base, data)

const refresh = (data: Req_Auth.Refresh): Req<Res_Auth.Refresh> =>
	http.post(AuthRoute.refresh, data)

export const RAuth = {
	login,
	refresh,
}
