import { lazy } from 'react'
import authRoute from './authRoute'
import type { Routes } from '@/@types/routes'

export const publicRoutes: Routes = [...authRoute]

export const protectedRoutes = [
    {
        key: 'home',
        path: '/home',
        component: lazy(() => import('@/views/Home')),
        authority: [],
    },
    {
        key: 'appsSales.propertyList',
        path: '/app/sales/product-list',
        component: lazy(() => import('@/views/sales/ProductList')),
        meta: {
            header: 'Property List',
        },
        authority: [],
    },
    {
        key: 'appsSales.productNew',
        path: `/app/sales/product-new`,
        component: lazy(() => import('@/views/sales/ProductNew')),
        authority: [],
        meta: {
            header: 'Add New Property',
        },
    },
    {
        key: 'appsSales.productEdit',
        path: `/app/sales/product-edit/:id`,
        component: lazy(() => import('@/views/sales/ProductEdit')),
        authority: [],
        meta: {
            header: 'Update Property',
        },
    }
]