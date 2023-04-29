import { http } from 'shared/config/axios'
import { Req } from 'shared/interface/axios'
import { AuthRoute } from 'shared/constant/routes'

const login = (data: Req_Auth.Login): Req<Res_Auth.Login> =>
	http.post(AuthRoute.base, data)

const refresh = (data: Req_Auth.Refresh): Req<Res_Auth.Refresh> =>
	http.post(AuthRoute.refresh, data)

export const RAuth = {
	login,
	refresh,
}
