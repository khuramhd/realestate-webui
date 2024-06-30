import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { apiDeleteProperty, apiGetProperty, apiUpdateProperty } from '@/services/SalesService'
import { InitialData } from '../../ProductForm'

export type SalesProductEditState = {
    loading: boolean
    productData: InitialData
}

type GetSalesProductResponse = InitialData

export const SLICE_NAME = 'salesProductEdit'

export const getProperty = createAsyncThunk(
    SLICE_NAME + '/getProducts',
    async (data: { id: string }) => {
        console.log(data)
        const response = await apiGetProperty<
            GetSalesProductResponse,
            { id: string }
        >(data)
        console.log(response.data)
        return response.data
    }
) 

export const updateProperty = async <T, U extends Record<string, unknown>>(
    data: U
) => {
    const response = await apiUpdateProperty<T, U>(data)
    return response.data
}

export const deleteProperty = async <T, U extends Record<string, unknown>>(
    data: U
) => {
    const response = await apiDeleteProperty<T, U>(data)
    return response.data
}

const initialState: SalesProductEditState = {
    loading: true,
    productData: {},
}

const productEditSlice = createSlice({
    name: `${SLICE_NAME}/state`,
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getProperty.fulfilled, (state, action) => {
                state.productData = action.payload
                state.loading = false
            })
            .addCase(getProperty.pending, (state) => {
                state.loading = true
            })
    },
})

export default productEditSlice.reducer
