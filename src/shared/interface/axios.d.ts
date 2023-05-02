type AxiosResponse = import('axios').AxiosResponse

type AxiosReq<T> = Promise<AxiosResponse<T>>

type AxiosReqWrap<T> = Promise<AxiosResponse<AxiosReqWrap<T>>>
