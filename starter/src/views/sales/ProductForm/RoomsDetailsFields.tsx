import AdaptableCard from '@/components/shared/AdaptableCard'
import RichTextEditor from '@/components/shared/RichTextEditor'
import Input from '@/components/ui/Input'
import { FormItem } from '@/components/ui/Form'
import Select from '@/components/ui/Select'
import { Field, FormikErrors, FormikTouched, FieldProps } from 'formik'

type FormFieldsName = {
    numberOfMasterBedrooms: number
    numberOfOtherBedrooms: number
    numberOfFullBathrooms: number
    numberOfHalfBathrooms: number
    numberOfMediaRooms: number
    numberOfStudies: number
    numberOfFormalDiningRooms: number
    numberOfGameRooms: number
}

type RoomsDetailsFields = {
    touched: FormikTouched<FormFieldsName>
    errors: FormikErrors<FormFieldsName>
}

const numberListOneToTen = [
    { label: '1', value: 1 },
    { label: '2', value: 2 },
    { label: '3', value: 3 },
    { label: '4', value: 4 },
    { label: '5', value: 5 },
    { label: '6', value: 6 },
    { label: '7', value: 7 },
    { label: '8', value: 8 },
    { label: '9', value: 9 },
    { label: '10', value: 10 },
]

const numberListZeroToTen = [
    { label: '0', value: 0 },
    { label: '1', value: 1 },
    { label: '2', value: 2 },
    { label: '3', value: 3 },
    { label: '4', value: 4 },
    { label: '5', value: 5 },
    { label: '6', value: 6 },
    { label: '7', value: 7 },
    { label: '8', value: 8 },
    { label: '9', value: 9 },
    { label: '10', value: 10 },
]

const numberListZeroToFive = [
    { label: '0', value: 0 },
    { label: '1', value: 1 },
    { label: '2', value: 2 },
    { label: '3', value: 3 },
    { label: '4', value: 4 },
    { label: '5', value: 5 },
]

const numberListOneToFive = [
    { label: '1', value: 1 },
    { label: '2', value: 2 },
    { label: '3', value: 3 },
    { label: '4', value: 4 },
    { label: '5', value: 5 },
]

const numberListZeroToTwo = [
    { label: '0', value: 0 },
    { label: '1', value: 1 },
    { label: '2', value: 2 },
]

const numberListOneToTwo = [
    { label: '1', value: 1 },
    { label: '2', value: 2 },
]

const RoomsDetailsFields = (props: RoomsDetailsFields) => {
    const { touched, errors } = props

    return (
        <AdaptableCard divider className="mb-4">
            <h5>Rooms</h5>
            <p className="mb-6">Details about the rooms.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="col-span-1">
                    <FormItem
                        label="Master bedrooms"
                        invalid={(errors.numberOfMasterBedrooms && touched.numberOfMasterBedrooms) as boolean}
                        errorMessage={errors.numberOfMasterBedrooms}
                    >
                        <Field name="numberOfMasterBedrooms">
                            {({ field, form }: FieldProps) => (
                                <Select
                                    field={field}
                                    form={form}
                                    options={numberListOneToTwo}
                                    value={numberListOneToTwo.filter(
                                        (theNumber) =>
                                            theNumber.value === field.value
                                    )}
                                    onChange={(option) => {
                                            form.setFieldValue(
                                                    field.name,
                                                    option?.value
                                            )
                                        }
                                    }
                                />
                            )}
                        </Field>
                    </FormItem>
                    
                </div>
                <div className="col-span-1">
                <FormItem
                        label="Other bedrooms"
                        invalid={(errors.numberOfOtherBedrooms && touched.numberOfOtherBedrooms) as boolean}
                        errorMessage={errors.numberOfOtherBedrooms}
                    >
                        <Field name="numberOfOtherBedrooms">
                            {({ field, form }: FieldProps) => ( 
                                <Select
                                    field={field}
                                    form={form}
                                    options={numberListZeroToTen}
                                    value={numberListZeroToTen.filter(
                                        (theNumber) =>
                                            theNumber.value === field.value
                                    )}
                                    onChange={(option) => {
                                            form.setFieldValue(
                                                    field.name,
                                                    option?.value
                                            )
                                        }
                                    }
                                />
                            )}
                        </Field>
                    </FormItem>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="col-span-1">
                    <FormItem
                        label="Full bathrooms"
                        invalid={(errors.numberOfFullBathrooms && touched.numberOfFullBathrooms) as boolean}
                        errorMessage={errors.numberOfFullBathrooms}
                    >
                        <Field name="numberOfFullBathrooms">
                            {({ field, form }: FieldProps) => (
                                <Select
                                    field={field}
                                    form={form}
                                    options={numberListOneToTen}
                                    value={numberListOneToTen.filter(
                                        (theNumber) =>
                                            theNumber.value === field.value
                                    )}
                                    onChange={(option) => {
                                            form.setFieldValue(
                                                    field.name,
                                                    option?.value
                                            )
                                        }
                                    }
                                />
                            )}
                        </Field>
                    </FormItem>
                </div>
                <div className="col-span-1">
                <FormItem
                        label="Half bathrooms"
                        invalid={(errors.numberOfHalfBathrooms && touched.numberOfHalfBathrooms) as boolean}
                        errorMessage={errors.numberOfHalfBathrooms}
                    >
                        <Field name="numberOfHalfBathrooms">
                            {({ field, form }: FieldProps) => (
                                <Select
                                    field={field}
                                    form={form}
                                    options={numberListZeroToTwo}
                                    value={numberListZeroToTwo.filter(
                                        (theNumber) =>
                                            theNumber.value === field.value
                                    )}
                                    onChange={(option) => {
                                            form.setFieldValue(
                                                    field.name,
                                                    option?.value
                                            )
                                        }
                                    }
                                />
                            )}
                        </Field>
                    </FormItem>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="col-span-1">
                    <FormItem
                        label="Dining rooms"
                        invalid={(errors.numberOfFormalDiningRooms && touched.numberOfFormalDiningRooms) as boolean}
                        errorMessage={errors.numberOfFormalDiningRooms}
                    >
                        <Field name="numberOfFormalDiningRooms">
                            {({ field, form }: FieldProps) => (
                                <Select
                                    field={field}
                                    form={form}
                                    options={numberListZeroToTwo}
                                    value={numberListZeroToTwo.filter(
                                        (theNumber) =>
                                            theNumber.value === field.value
                                    )}
                                    onChange={(option) => {
                                            form.setFieldValue(
                                                    field.name,
                                                    option?.value
                                            )
                                        }
                                    }
                                />
                            )}
                        </Field>
                    </FormItem>
                </div>
                <div className="col-span-1">
                <FormItem
                        label="Game rooms"
                        invalid={(errors.numberOfGameRooms && touched.numberOfGameRooms) as boolean}
                        errorMessage={errors.numberOfGameRooms}
                    >
                        <Field name="numberOfGameRooms">
                            {({ field, form }: FieldProps) => (
                                <Select
                                    field={field}
                                    form={form}
                                    options={numberListZeroToTwo}
                                    value={numberListZeroToTwo.filter(
                                        (theNumber) =>
                                            theNumber.value === field.value
                                    )}
                                    onChange={(option) => {
                                            form.setFieldValue(
                                                    field.name,
                                                    option?.value
                                            )
                                        }
                                    }
                                />
                            )}
                        </Field>
                    </FormItem>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="col-span-1">
                    <FormItem
                        label="Media rooms"
                        invalid={(errors.numberOfMediaRooms && touched.numberOfMediaRooms) as boolean}
                        errorMessage={errors.numberOfMediaRooms}
                    >
                        <Field name="numberOfMediaRooms">
                            {({ field, form }: FieldProps) => (
                                <Select
                                    field={field}
                                    form={form}
                                    options={numberListZeroToTwo}
                                    value={numberListZeroToTwo.filter(
                                        (theNumber) =>
                                            theNumber.value === field.value
                                    )}
                                    onChange={(option) => {
                                            form.setFieldValue(
                                                    field.name,
                                                    option?.value
                                            )
                                        }
                                    }
                                />
                            )}
                        </Field>
                    </FormItem>
                </div>
                <div className="col-span-1">
                <FormItem
                        label="Studies"
                        invalid={(errors.numberOfStudies && touched.numberOfStudies) as boolean}
                        errorMessage={errors.numberOfStudies}
                    >
                        <Field name="numberOfStudies">
                            {({ field, form }: FieldProps) => (
                                <Select
                                    field={field}
                                    form={form}
                                    options={numberListZeroToTwo}
                                    value={numberListZeroToTwo.filter(
                                        (theNumber) =>
                                            theNumber.value === field.value
                                    )}
                                    onChange={(option) => {
                                            form.setFieldValue(
                                                    field.name,
                                                    option?.value
                                            )
                                        }
                                    }
                                />
                            )}
                        </Field>
                    </FormItem>
                </div>
            </div>
        </AdaptableCard>
    )
}

export default RoomsDetailsFields
