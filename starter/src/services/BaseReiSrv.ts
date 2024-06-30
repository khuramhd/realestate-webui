import axios from 'axios'
import appConfig from '@/configs/app.config'
import { TOKEN_TYPE, REQUEST_HEADER_AUTH_KEY } from '@/constants/api.constant'
import { PERSIST_STORE_NAME } from '@/constants/app.constant'
import deepParseJson from '@/utils/deepParseJson'
import store, { signOutSuccess } from '../store'

const unauthorizedCode = [401]

const BaseReiService = axios.create({
    timeout: 60000,
    baseURL: 'https://z1ne07daa6.execute-api.us-east-1.amazonaws.com/Prod' + appConfig.apiPrefix,
    // baseURL: 'http://localhost:63781' + appConfig.apiPrefix,
    
})

BaseReiService.interceptors.request.use(
    (config) => {
        const rawPersistData = localStorage.getItem(PERSIST_STORE_NAME)
        const persistData = deepParseJson(rawPersistData)

        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        // let accessToken = (persistData as any).auth.session.token
        let accessToken = ""; // todo: figure out the auth later. 

        if (!accessToken) {
            const { auth } = store.getState()
            accessToken = auth.session.token ?? ""
        }

        if (accessToken) {
            config.headers[
                REQUEST_HEADER_AUTH_KEY
            ] = `${TOKEN_TYPE}${accessToken}`
        }

        console.log("Returning config. ");
        console.log(config)

        return config
    },
    (error) => {
        console.log("Error happended in basereisrv.");
        return Promise.reject(error)
    }
)

BaseReiService.interceptors.response.use(
    (response) => {
        console.log("response: ", response)
        return response
    },
    (error) => {
        const { response } = error
        console.log("error");
        if (response && unauthorizedCode.includes(response.status)) {
            store.dispatch(signOutSuccess())
        }

        console.log("Error happended in basereisrv.");
        return Promise.reject(error)
    }
)

export default BaseReiService
