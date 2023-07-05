import { AxiosConfig } from './config'

import axios from 'axios'

export const publicHttp = axios.create(AxiosConfig)
