import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import {
    apiGetProperties,
    apiDeleteSalesProducts,
} from '@/services/SalesService'
import {
    useAppDispatch,
} from '../store'
import type { TableQueries } from '@/@types/common'
import { stat } from 'fs'
import { useDispatch } from 'react-redux'


// Properties
type Property = {
    propertyId: string
    name: string
    address: string
    city: string
    state: string
    zip: string,
    bedrooms: string
    bathrooms: string
}

type Properties = Property[]

type GetPropertyResponse = {
    data: Properties
    total: number
}

type PropertyFilterQueries = {
    state: string
    zip: string
    city: string
    bedrooms: string
    bathrooms: string
}

export type PropertyListState = {
    loading: boolean
    deleteConfirmation: boolean
    selectedProperty: string
    tableData: TableQueries
    filterData: PropertyFilterQueries
    propertyList: Property[]
}

export type GetPropertiesRequest = TableQueries & { filterData?: PropertyFilterQueries }

export const SLICE_NAME = 'propertyList'


export const getProperties = createAsyncThunk(
    "property" + '/all',
    async (rquestData: GetPropertiesRequest) => {
        console.log("Reqquest Data");
        console.log(rquestData)
        const response = await apiGetProperties<
            GetPropertyResponse,
            GetPropertiesRequest>(rquestData)
        console.log("fetching data of properties response", response.data)
        return response.data
    }
)


export const deleteProperty = async (data: { id: string | string[] }) => {
    const response = await apiDeleteSalesProducts<
        boolean,
        { id: string | string[] }
    >(data)
    return response.data
}

export const initialTableData: TableQueries = {
    total: 0,
    pageIndex: 1,
    pageSize: 10,
    query: '',
    sort: {
        order: '',
        key: '',
    }
}

const initialState: PropertyListState = {
    loading: false,
    deleteConfirmation: false,
    selectedProperty: '',
    propertyList: [],
    tableData: initialTableData,
    filterData: {
        city: '',
        state: '',
        zip: '',
        bedrooms: '',
        bathrooms: ''
    },
}

const propertyListSlice = createSlice({
    name: `${SLICE_NAME}/state`,
    initialState,
    reducers: {
        updatePropertyList: (state, action) => {
            state.propertyList = action.payload
        },
        setTableData: (state, action) => {
            state.tableData = action.payload
        },
        setFilterData: (state, action) => {
            // const dispatch = useAppDispatch()
            console.log("Filter Data");
            console.log(action.payload);
            console.log("Getting Properties");
            state.filterData = action.payload;
            // dispatch(getProperties(state));
        },
        toggleDeleteConfirmation: (state, action) => {
            state.deleteConfirmation = action.payload
        },
        setSelectedProduct: (state, action) => {
            state.selectedProperty = action.payload
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(getProperties.fulfilled, (state, action) => {
                state.propertyList = action.payload.data
                state.tableData.total = action.payload.total
                state.loading = false
            })
            .addCase(getProperties.pending, (state) => {
                state.loading = true
            })
    },
})

export const {
    updatePropertyList,
    setTableData,
    setFilterData,
    toggleDeleteConfirmation,
    setSelectedProduct,
} = propertyListSlice.actions

export default propertyListSlice.reducer
