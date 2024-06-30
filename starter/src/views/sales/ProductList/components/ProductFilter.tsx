import { useState, useRef, forwardRef } from 'react'
import { HiOutlineFilter, HiOutlineSearch } from 'react-icons/hi'
import type { TableQueries } from '@/@types/common'
import {
    getProperties,
    setFilterData,
    initialTableData,
    useAppDispatch,
    useAppSelector,
} from '../store'
import { FormItem, FormContainer } from '@/components/ui/Form'
import Input from '@/components/ui/Input'
import Button from '@/components/ui/Button'
import Checkbox from '@/components/ui/Checkbox'
import Radio from '@/components/ui/Radio'
import Drawer from '@/components/ui/Drawer'
import { Field, Form, Formik, FormikProps, FieldProps } from 'formik'
import type { MouseEvent } from 'react'
import cloneDeep from 'lodash/cloneDeep'


type FormModel = {
    city: string
    zip: string
    state: string
    bedrooms: string
    bathrooms: string
}

type FilterFormProps = {
    onSubmitComplete?: () => void
}

type DrawerFooterProps = {
    onSaveClick: (event: MouseEvent<HTMLButtonElement>) => void
    onCancel: (event: MouseEvent<HTMLButtonElement>) => void
}

export type GetPropertiesRequest = TableQueries & { filterData?: any }

const FilterForm = forwardRef<FormikProps<FormModel>, FilterFormProps>(
    ({ onSubmitComplete }, ref) => {
        const dispatch = useAppDispatch()

        const filterData = useAppSelector(
            (state) => state.propertyList.data.filterData
        )

        const tableData = useAppSelector(
            (state) => state.propertyList.data.tableData
        )

        const handleSubmit = (values: FormModel) => {
            onSubmitComplete?.()
            dispatch(setFilterData(values))
            console.log('Filter Data', values)
            const newTableData = cloneDeep(tableData)
            var propertyRequest : GetPropertiesRequest = newTableData;
            propertyRequest.pageIndex = 1
            propertyRequest.filterData = values

            dispatch(getProperties(newTableData))
        }

        return (
            // <span>Filter form is commented out.</span>
            <Formik
                enableReinitialize
                innerRef={ref}
                initialValues={filterData}
                onSubmit={(values) => {
                    handleSubmit(values)
                }}
            >
                {({ values, touched, errors }) => (
                    <Form>
                        <FormContainer>
                        <FormItem
                                invalid={errors.zip && touched.zip}
                                errorMessage={errors.zip}
                            >
                                <h6 className="mb-4">Zip Code</h6>
                                <Field
                                    type="text"
                                    autoComplete="off"
                                    name="zip"
                                    placeholder="Zip Code"
                                    component={Input}
                                    prefix={
                                        <HiOutlineSearch className="text-lg" />
                                    }
                                />
                            </FormItem>
                            <FormItem
                                invalid={errors.city && touched.city}
                                errorMessage={errors.city}
                            >
                                <h6 className="mb-4">City</h6>
                                <Field
                                    type="text"
                                    autoComplete="off"
                                    name="city"
                                    placeholder="City"
                                    component={Input}
                                    prefix={
                                        <HiOutlineSearch className="text-lg" />
                                    }
                                />
                            </FormItem>
                            <FormItem
                                invalid={errors.state && touched.state}
                                errorMessage={errors.state}
                            >
                                <h6 className="mb-4">State</h6>
                                <Field
                                    type="text"
                                    autoComplete="off"
                                    name="state"
                                    placeholder="State"
                                    //maxlength={2}
                                    component={Input}
                                    prefix={
                                        <HiOutlineSearch className="text-lg" />
                                    }
                                />
                            </FormItem>
                            <FormItem
                                invalid={errors.bedrooms && touched.bedrooms}
                                errorMessage={errors.bedrooms as string}
                            >
                                <h6 className="mb-4">Bedrooms</h6>
                                <Field name="bedrooms">
                                    {({ field, form }: FieldProps) => (
                                        <>
                                            <Radio.Group
                                                vertical
                                                value={values.bedrooms}
                                                onChange={(options) =>
                                                    form.setFieldValue(
                                                        field.name,
                                                        options
                                                    )
                                                }
                                            >
                                                <Radio
                                                    className="mb-3"
                                                    name={field.name}
                                                    value="1+"
                                                >
                                                    1+{' '}
                                                </Radio>
                                                <Radio
                                                    className="mb-3"
                                                    name={field.name}
                                                    value="2+"
                                                >
                                                    2+{' '}
                                                </Radio>
                                                <Radio
                                                    className="mb-3"
                                                    name={field.name}
                                                    value="3+"
                                                >
                                                    3+{' '}
                                                </Radio>
                                                <Radio
                                                    className="mb-3"
                                                    name={field.name}
                                                    value="4+"
                                                >
                                                    4+{' '}
                                                </Radio>
                                                <Radio
                                                    className="mb-3"
                                                    name={field.name}
                                                    value="5+"
                                                >
                                                    5+{' '}
                                                </Radio>
                                            </Radio.Group>
                                        </>
                                    )}
                                </Field>
                            </FormItem>
                            <FormItem
                                invalid={errors.bathrooms && touched.bathrooms}
                                errorMessage={errors.bathrooms as string}
                            >
                                <h6 className="mb-4">Bathrooms</h6>
                                <Field name="bathrooms">
                                    {({ field, form }: FieldProps) => (
                                        <>
                                            <Radio.Group
                                                vertical
                                                value={values.bathrooms}
                                                onChange={(options) =>
                                                    form.setFieldValue(
                                                        field.name,
                                                        options
                                                    )
                                                }
                                            >
                                                <Radio
                                                    className="mb-3"
                                                    name={field.name}
                                                    value="1+"
                                                >
                                                    1+{' '}
                                                </Radio>
                                                <Radio
                                                    className="mb-3"
                                                    name={field.name}
                                                    value="2+"
                                                >
                                                    2+{' '}
                                                </Radio>
                                                <Radio
                                                    className="mb-3"
                                                    name={field.name}
                                                    value="3+"
                                                >
                                                    3+{' '}
                                                </Radio>
                                                <Radio
                                                    className="mb-3"
                                                    name={field.name}
                                                    value="4+"
                                                >
                                                    4+{' '}
                                                </Radio>
                                            </Radio.Group>  
                                        </>
                                    )}
                                </Field>
                            </FormItem>
                            {/* <FormItem
                                invalid={
                                    errors.productStatus &&
                                    touched.productStatus
                                }
                                errorMessage={errors.productStatus}
                            >
                                <h6 className="mb-4">Product Status</h6>
                                <Field name="productStatus">
                                    {({ field, form }: FieldProps) => (
                                        <Radio.Group
                                            vertical
                                            value={values.productStatus}
                                            onChange={(val) =>
                                                form.setFieldValue(
                                                    field.name,
                                                    val
                                                )
                                            }
                                        >
                                            <Radio value={0}>Published</Radio>
                                            <Radio value={1}>Disabled</Radio>
                                            <Radio value={2}>Archive</Radio>
                                        </Radio.Group>
                                    )}
                                </Field>
                            </FormItem> */}
                        </FormContainer>
                    </Form>
                )}
            </Formik>
        )
    }
)

const DrawerFooter = ({ onSaveClick, onCancel }: DrawerFooterProps) => {
    return (
        <div className="text-right w-full">
            <Button size="sm" className="mr-2" onClick={onCancel}>
                Cancel
            </Button>
            <Button size="sm" variant="solid" onClick={onSaveClick}>
                Query
            </Button>
        </div>
    )
}

const ProductFilter = () => {
    var formikRef = useRef<FormikProps<FormModel>>(null)

    const [isOpen, setIsOpen] = useState(false)

    const openDrawer = () => {
        setIsOpen(true)
    }

    const onDrawerClose = () => {
        setIsOpen(false)
    }

    const formSubmit = () => {
        formikRef.current?.submitForm()
    }

    return (
        <>
            <Button
                size="sm"
                className="block md:inline-block ltr:md:ml-2 rtl:md:mr-2 md:mb-0 mb-4"
                icon={<HiOutlineFilter />}
                onClick={() => openDrawer()}
            >
                Filter
            </Button>
            <Drawer
                title="Filter"
                isOpen={isOpen}
                footer={
                    <DrawerFooter
                        onCancel={onDrawerClose}
                        onSaveClick={formSubmit}
                    />
                }
                onClose={onDrawerClose}
                onRequestClose={onDrawerClose}
            >
                <FilterForm ref={formikRef} onSubmitComplete={onDrawerClose} />
            </Drawer>
        </>
    )
}

FilterForm.displayName = 'FilterForm'

export default ProductFilter
