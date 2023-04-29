import { http } from 'shared/config/axios'
import { AuthRoute } from 'shared'

const login = (data: Req_Auth.Login): AxiosReqWrap<Res_Auth.Login> =>
	http.post(AuthRoute.base, data)

const refresh = (data: Req_Auth.Refresh): AxiosReqWrap<Res_Auth.Refresh> =>
	http.post(AuthRoute.refresh, data)

export const RAuth = {
	login,
	refresh,
}
