import axios from 'axios'
import { AxiosConfig } from './config'

export const publicHttp = axios.create(AxiosConfig)
