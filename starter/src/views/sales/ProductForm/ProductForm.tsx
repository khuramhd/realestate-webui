import * as React from "react";
import { render } from "react-dom";
import { forwardRef, useState } from 'react'
import { FormContainer } from '@/components/ui/Form'
import Button from '@/components/ui/Button'
import hooks from '@/components/ui/hooks'
import StickyFooter from '@/components/shared/StickyFooter'
import ConfirmDialog from '@/components/shared/ConfirmDialog'
import { Form, Formik, FormikProps } from 'formik'
import BasicInformationFields from './BasicInformationFields'
import PricingFields from './PricingFields'
import OrganizationFields from './OrganizationFields'
import ProductImages from './ProductImages'
import cloneDeep from 'lodash/cloneDeep'
import { HiOutlineTrash } from 'react-icons/hi'
import { AiOutlineSave } from 'react-icons/ai'
import * as Yup from 'yup'
import AddressFields from './LocationFields'
import RoomFields from './RoomForm'
import FeatureFields from './FeatureFields'
import MoreInformationFields from './MoreInformationFields'
import { values } from "lodash";
import RoomsDetailsFields from "./RoomsDetailsFields";
import PropertyFeaturesFields from "./PropertyFeaturesFields";

// eslint-disable-next-line  @typescript-eslint/no-explicit-any
type FormikRef = FormikProps<any>

export type InitialData = {
    propertyId: string
    name: string
    description: string
    address: {
        addressLine1: string
        addressLine2: string
        city: string
        state: string
        zipCode: string
        county: string
        country: string
        subdivision: string
    },
    schoolDistrict: string
    subdivision: string
    buildYear: number
    numberOfMasterBedrooms: number
    numberOfOtherBedrooms: number
    numberOfFullBathrooms: number
    numberOfHalfBathrooms: number
    numberOfMediaRooms: number
    numberOfStudies: number
    numberOfFormalDiningRooms: number
    numberOfGameRooms: number
    featureList: string
    img: string
    imgList: { img: string; id: string }[]
}

export type FormModel = Omit<InitialData, 'tags'> & {
    tags: { label: string; value: string }[] | string[]
}

export type SetSubmitting = (isSubmitting: boolean) => void
export type OnDeleteCallback = React.Dispatch<React.SetStateAction<boolean>>
type OnDelete = (callback: OnDeleteCallback) => void

type PropertyForm = {
    initialData?: InitialData
    type: 'edit' | 'new'
    onDiscard?: () => void
    onDelete?: OnDelete
    onFormSubmit: (formData: FormModel, setSubmitting: SetSubmitting) => void
}

const { useUniqueId } = hooks

const validationSchema = Yup.object().shape({
    name: Yup.string().required('Property Name is required.'),
    description: Yup.string().required('Description is required.'),
    address: Yup.object().shape({
        addressLine1: Yup.string().required('Address Line 1 is required.')
      }),
})

const DeleteProductButton = ({ onDelete }: { onDelete: OnDelete }) => {
    const [dialogOpen, setDialogOpen] = useState(false)

    const onConfirmDialogOpen = () => {
        setDialogOpen(true)
    }

    const onConfirmDialogClose = () => {
        setDialogOpen(false)
    }

    const handleConfirm = () => {
        onDelete?.(setDialogOpen)
    }

    return (
        <>
            <Button
                className="text-red-600"
                variant="plain"
                size="sm"
                icon={<HiOutlineTrash />}
                type="button"
                onClick={onConfirmDialogOpen}
            >
                Delete
            </Button>
            <ConfirmDialog
                isOpen={dialogOpen}
                type="danger"
                title="Delete Residential Property?"
                confirmButtonColor="red-600"
                onClose={onConfirmDialogClose}
                onRequestClose={onConfirmDialogClose}
                onCancel={onConfirmDialogClose}
                onConfirm={handleConfirm}
            >
                <p>
                Are you sure you want to delete the property? This action cannot be undone.
                </p>
            </ConfirmDialog>
        </>
    )
}

export const ThePropertyForm = forwardRef<FormikRef, PropertyForm>((props, ref) => {
    
    const {
        type,
        initialData = {
            propertyId: '',
            name: '',
            description: 'A beautiful villa with a sunset view.',
            address: {
                addressLine1: '1234 Main St.',
                addressLine2: '',
                city: 'New York',
                state: 'NY',
                zipCode: '77111',
                county: 'NY Country',
                country: 'US',
                subdivision: ''
            },
            schoolDistrict: 'Haris County',
            subdivision: 'New Landmark',
            buildYear: 2021,
            numberOfMasterBedrooms: 1,
            numberOfOtherBedrooms: 0,
            numberOfFullBathrooms: 1,
            numberOfHalfBathrooms: 0,
            numberOfMediaRooms: 0,
            numberOfStudies: 0,
            numberOfFormalDiningRooms: 0, 
            numberOfGameRooms: 0,
            featureList: "",
            imgList: [],
            img: ''
        },
        onFormSubmit,
        onDiscard,
        onDelete,
    } = props
    const newId = useUniqueId('rp-')
    
    return (
        <>
            <Formik
                innerRef={ref}
                initialValues={{
                    ...initialData
                }}
                validationSchema={validationSchema}
                onSubmit={(values: FormModel, { setSubmitting }) => {
                    const formData = cloneDeep(values)
                    if (type === 'new') {
                        formData.propertyId = newId
                        if (formData.imgList && formData.imgList.length > 0) {
                            formData.img = formData.imgList[0].img
                        }
                    }
                    onFormSubmit?.(formData, setSubmitting)
                }}
            >
                {({ values, touched, errors, isSubmitting }) => (
                    <Form>
                        <FormContainer>
                            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                                <div className="lg:col-span-2">
                                    <BasicInformationFields
                                        touched={touched}
                                        errors={errors}
                                    />
                                    <AddressFields
                                        touched={touched}
                                        errors={errors}
                                        values={values.address}
                                    />

                                    <MoreInformationFields
                                        touched={touched}
                                        errors={errors}
                                    />

                                    <RoomsDetailsFields
                                        touched={touched}
                                        errors={errors}
                                    />
            
                                    <PropertyFeaturesFields
                                        touched={touched}
                                        errors={errors}
                                    />

                                    {/* <PricingFields
                                        touched={touched}
                                        errors={errors}
                                    />
                                    <OrganizationFields
                                        touched={touched}
                                        errors={errors}
                                        values={values}
                                    /> */}
                                </div>
                                <div className="lg:col-span-1">
                                    <ProductImages values={values} />
                                </div>
                            </div>
                            <StickyFooter
                                className="-mx-8 px-8 flex items-center justify-between py-4"
                                stickyClass="border-t bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700"
                            >
                                <div>
                                    {type === 'edit' && (
                                        <DeleteProductButton
                                            onDelete={onDelete as OnDelete}
                                        />
                                    )}
                                </div>
                                <div className="md:flex items-center">
                                    <Button
                                        size="sm"
                                        className="ltr:mr-3 rtl:ml-3"
                                        type="button"
                                        onClick={() => onDiscard?.()}
                                    >
                                        Discard
                                    </Button>
                                    <Button
                                        size="sm"
                                        variant="solid"
                                        loading={isSubmitting}
                                        icon={<AiOutlineSave />}
                                        type="submit"
                                    >
                                        Save
                                    </Button>
                                </div>
                            </StickyFooter>
                        </FormContainer>
                    </Form>
                )}
            </Formik>
        </>
    )
})

ThePropertyForm.displayName = 'PropertyForm'

export default ThePropertyForm
