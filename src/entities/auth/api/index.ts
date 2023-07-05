import { Req_Auth, Res_Auth } from 'entities/auth/api/auth'

import { http } from 'shared/config/axios'

const login = (data: Req_Auth.Login): AxiosReqWrap<Res_Auth.Login> => http.post('login', data)

const refresh = (data: Req_Auth.Refresh): AxiosReqWrap<Res_Auth.Refresh> =>
	http.post('refresh', data)

export const RAuth = {
	login,
	refresh,
}
