import { AxiosResponse } from 'axios'

type AxiosReq<T> = Promise<AxiosResponse<T>>

type Req<T> = Promise<AxiosResponse<ReqWrap<T>>>
