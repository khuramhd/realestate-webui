import ApiService from './ApiService'
import ReiApiService from './ReiApiService'

export async function apiGetSalesDashboardData<
    T extends Record<string, unknown>
>() {
    return ApiService.fetchData<T>({
        url: '/sales/dashboard',
        method: 'post',
    })
}

export async function apiGetProperties<T, U extends Record<string, unknown>>(data: U) {
    return ReiApiService.fetchData<T>({
        url: '/property/all',
        method: 'post',
        data
    })
}

export async function apiCreateProperty<
    T,
    U extends Record<string, unknown>
>(data: U) {
    return ReiApiService.fetchData<T>({
        url: '/property/save',
        method: 'post',
        data,
    })
}

export async function apiDeleteProperty<
    T,
    U extends Record<string, unknown>
>(data: U) {
    return ReiApiService.fetchData<T>({
        url: '/property/delete',
        method: 'post',
        data,
    })
}

export async function apiUpdateProperty<
    T,
    U extends Record<string, unknown>
>(data: U) {
    return ReiApiService.fetchData<T>({
        url: '/property/update',
        method: 'post',
        data,
    })
}


export async function apiGetProperty<T, U extends Record<string, unknown>>(
    params: U
) {
    return ReiApiService.fetchData<T>({
        url: '/property/details/' + params.id,
        method: 'get',
        params,
    })
}


export async function apiGetSalesProducts<T, U extends Record<string, unknown>>(
    data: U
) {
    return ApiService.fetchData<T>({
        url: '/sales/products',
        method: 'post',
        data,
    })
}

export async function apiDeleteSalesProducts<
    T,
    U extends Record<string, unknown>
>(data: U) {
    return ApiService.fetchData<T>({
        url: '/sales/products/delete',
        method: 'delete',
        data,
    })
}

export async function apiGetSalesProduct<T, U extends Record<string, unknown>>(
    params: U
) {
    return ApiService.fetchData<T>({
        url: '/sales/product',
        method: 'get',
        params,
    })
}

export async function apiPutSalesProduct<T, U extends Record<string, unknown>>(
    data: U
) {
    return ApiService.fetchData<T>({
        url: '/sales/products/update',
        method: 'put',
        data,
    })
}

export async function apiCreateSalesProduct<
    T,
    U extends Record<string, unknown>
>(data: U) {
    return ApiService.fetchData<T>({
        url: '/sales/products/create',
        method: 'post',
        data,
    })
}

export async function apiGetSalesOrders<T, U extends Record<string, unknown>>(
    params: U
) {
    return ApiService.fetchData<T>({
        url: '/sales/orders',
        method: 'get',
        params,
    })
}

export async function apiDeleteSalesOrders<
    T,
    U extends Record<string, unknown>
>(data: U) {
    return ApiService.fetchData<T>({
        url: '/sales/orders/delete',
        method: 'delete',
        data,
    })
}

export async function apiGetSalesOrderDetails<
    T,
    U extends Record<string, unknown>
>(params: U) {
    return ApiService.fetchData<T>({
        url: '/sales/orders-details',
        method: 'get',
        params,
    })
}
