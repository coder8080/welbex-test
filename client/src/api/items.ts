import { AxiosResponse } from 'axios'
import axios from './axios'

export interface getItemsParams {
  page: number
  sorttype: string
  filterfield: string
  filteroption: string
  filtervalue: string
}

export const getItems: (params: getItemsParams) => Promise<AxiosResponse> = (
  params
) => {
  return axios.get('/items/get', { params })
}
