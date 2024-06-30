import AdaptableCard from '@/components/shared/AdaptableCard'
import { FormItem } from '@/components/ui/Form'
import Input from '@/components/ui/Input'
import Select from '@/components/ui/Select'

import { Field, FormikErrors, FormikTouched, FieldProps } from 'formik'

type FormFieldsName = {
    id: string
    description: string
    roomSizeInSqFt: number
    roomType: number
}

type RoomeFieldsProps = {
    touched: FormikTouched<FormFieldsName>
    errors: FormikErrors<FormFieldsName>
    values: FormFieldsName
    roomNumber: number
}

// List of room types
const roomTypes = [
    { label: 'MasterBedroom', value: 1 },
    { label: 'Bedroom', value: 2 },
    { label: 'DinningRoom', value: 3 },
    { label: 'Bathroom', value: 4 },
    { label: 'HalfBathroom', value: 5 },
]

const RoomFields = (props: RoomeFieldsProps) => {
    const {values = {}, touched, errors } = props

    return (
        <AdaptableCard divider className="mb-4">
                <h6>Room # {props.roomNumber + 1}</h6>
                <br/>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="col-span-1">
                <FormItem
                        label="Room Type"
                        invalid={
                            (errors.roomType && touched.roomType) as boolean
                        }
                        errorMessage={errors.roomType}
                    >
                        <Field name={"rooms[" + props.roomNumber + "].roomType"}>
                            {({ field, form }: FieldProps) => (
                                <Select
                                    field={field}
                                    form={form}
                                    options={roomTypes}
                                    value={roomTypes.filter(
                                        (roomType) =>
                                        roomType.value === values.roomType 
                                    )}
                                    onChange={(option) =>
                                        form.setFieldValue(
                                            field.name,
                                            option?.value
                                        )
                                    }
                                />
                            )}
                        </Field>
                    </FormItem>
                </div>
                <div className="col-span-1">
                    <FormItem
                        label="Size in Square Feet"
                        invalid={(errors.roomSizeInSqFt && touched.roomSizeInSqFt) as boolean}
                        errorMessage={errors.roomSizeInSqFt}
                    >
                        <Field
                            type="number"
                            autoComplete="off"
                            name={"rooms[" + props.roomNumber + "].roomSizeInSqFt"}
                            placeholder="Size in SqFt"
                            component={Input}
                        />
                    </FormItem>
                </div>
                </div>
                <FormItem
                    label="Description"
                    invalid={(errors.description && touched.description) as boolean}
                    errorMessage={errors.description}
                >
                    <Field
                        type="text"
                        autoComplete="off"
                        name={"rooms[" + props.roomNumber + "].description"}
                        placeholder="Description"
                        component={Input}
                    />
                </FormItem>
        
        </AdaptableCard>
    )
}

export default RoomFields
