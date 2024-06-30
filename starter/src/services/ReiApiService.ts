import BaseReiService from './BaseReiSrv'
import type { AxiosRequestConfig, AxiosResponse, AxiosError } from 'axios'

const ReiApiService = {
    fetchData<Response = unknown, Request = Record<string, unknown>>(
        param: AxiosRequestConfig<Request>
    ) {
        console.log(param)
        return new Promise<AxiosResponse<Response>>((resolve, reject) => {
            BaseReiService(param)
                .then((response: AxiosResponse<Response>) => {
                    console.log(response)
                    resolve(response)
                })
                .catch((errors: AxiosError) => {
                    console.log(errors)
                    reject(errors)
                })
        })
    },
}

export default ReiApiService
