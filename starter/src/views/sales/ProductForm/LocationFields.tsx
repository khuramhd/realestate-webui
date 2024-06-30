import AdaptableCard from '@/components/shared/AdaptableCard'
import { FormItem } from '@/components/ui/Form'
import Input from '@/components/ui/Input'
import Select from '@/components/ui/Select'
import CreatableSelect from 'react-select/creatable'
import { Field, FormikErrors, FormikTouched, FieldProps } from 'formik'

type FormFieldsName = {
    addressLine1: string
    addressLine2: string
    city: string
    state: string
    zipCode: string
    county: string
    country: string
    subdivision: string
}

type AddressFieldsProps = {
    touched: FormikTouched<FormFieldsName>
    errors: FormikErrors<FormFieldsName>
    values: FormFieldsName
}

// List of states in the US in alphabetical order in the object list of label and value
const states = [
    { label: 'Alabama', value: 'AL' },
    { label: 'Alaska', value: 'AK' },
    { label: 'Arizona', value: 'AZ' },
    { label: 'Arkansas', value: 'AR' },
    { label: 'California', value: 'CA' },
    { label: 'Colorado', value: 'CO' },
    { label: 'Connecticut', value: 'CT' },
    { label: 'Delaware', value: 'DE' },
    { label: 'District of Columbia', value: 'DC' },
    { label: 'Florida', value: 'FL' },
    { label: 'Georgia', value: 'GA' },
    { label: 'Hawaii', value: 'HI' },
    { label: 'Idaho', value: 'ID' },
    { label: 'Illinois', value: 'IL' },
    { label: 'Indiana', value: 'IN' },
    { label: 'Iowa', value: 'IA' },
    { label: 'Kansas', value: 'KS' },
    { label: 'Kentucky', value: 'KY' },
    { label: 'Louisiana', value: 'LA' },
    { label: 'Maine', value: 'ME' },
    { label: 'Maryland', value: 'MD' },
    { label: 'Massachusetts', value: 'MA' },
    { label: 'Michigan', value: 'MI' },
    { label: 'Minnesota', value: 'MN' },
    { label: 'Mississippi', value: 'MS' },
    { label: 'Missouri', value: 'MO' },
    { label: 'Montana', value: 'MT' },
    { label: 'Nebraska', value: 'NE' },
    { label: 'Nevada', value: 'NV' },
    { label: 'New Hampshire', value: 'NH' },
    { label: 'New Jersey', value: 'NJ' },
    { label: 'New Mexico', value: 'NM' },
    { label: 'New York', value: 'NY' },
    { label: 'North Carolina', value: 'NC' },
    { label: 'North Dakota', value: 'ND' },
    { label: 'Ohio', value: 'OH' },
    { label: 'Oklahoma', value: 'OK' },
    { label: 'Oregon', value: 'OR' },
    { label: 'Pennsylvania', value: 'PA' },
    { label: 'Rhode Island', value: 'RI' },
    { label: 'South Carolina', value: 'SC' },
    { label: 'South Dakota', value: 'SD' },
    { label: 'Tennessee', value: 'TN' },
    { label: 'Texas', value: 'TX' },
    { label: 'Utah', value: 'UT' },
    { label: 'Vermont', value: 'VT' },
    { label: 'Virginia', value: 'VA' },
    { label: 'Washington', value: 'WA' },
    { label: 'West Virginia', value: 'WV' },
    { label: 'Wisconsin', value: 'WI' },
    { label: 'Wyoming', value: 'WY' },
]

const AddressFields = (props: AddressFieldsProps) => {
    const {values = { }, touched, errors } = props
    //const { state, touched, errors } = props

    return (
        <AdaptableCard divider className="mb-4">
            <h5>Address</h5>
            <p className="mb-6">The address of the residential real estate.</p>
            <FormItem
                label="Address Line 1"
                invalid={(errors.addressLine1 && touched.addressLine1) as boolean}
                errorMessage={errors.addressLine1}
            >
                <Field
                    type="text"
                    autoComplete="off"
                    name="address.addressLine1"
                    placeholder="Address Line 1"
                    component={Input}
                />
            </FormItem>
            <FormItem
                label="Address Line 2"
                invalid={(errors.addressLine2 && touched.addressLine2) as boolean}
                errorMessage={errors.addressLine2}
            >
                <Field
                    type="text"
                    autoComplete="off"
                    name="address.addressLine2"
                    placeholder="Address Line 2"
                    component={Input}
                />
            </FormItem>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="col-span-1">
                    <FormItem
                        label="City"
                        invalid={(errors.city && touched.city) as boolean}
                        errorMessage={errors.city}
                    >
                        <Field
                            type="text"
                            autoComplete="off"
                            name="address.city"
                            placeholder="City"
                            component={Input}
                        />
                    </FormItem>
                </div>
                <div className="col-span-1">
                <FormItem
                        label="State"
                        invalid={
                            (errors.state && touched.state) as boolean
                        }
                        errorMessage={errors.state}
                    >
                        <Field name="address.state">
                            {({ field, form }: FieldProps) => (
                                <Select
                                    field={field}
                                    form={form}
                                    options={states}
                                    value={states.filter(
                                        (state) =>
                                            state.value === field.value
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
                        label="Zip Code"
                        invalid={(errors.zipCode && touched.zipCode) as boolean}
                        errorMessage={errors.zipCode}
                    >
                        <Field
                            type="text"
                            autoComplete="off"
                            name="address.zipCode"
                            placeholder="Zip Code"
                            component={Input}
                        />
                    </FormItem>
                </div>
                <div className="col-span-1">
                    <FormItem
                        label="County"
                        invalid={(errors.county && touched.county) as boolean}
                        errorMessage={errors.county}
                    >
                        <Field
                            type="text"
                            autoComplete="off"
                            name="address.county"
                            placeholder="County"
                            component={Input}
                        />
                    </FormItem>
                </div>
            </div>
        </AdaptableCard>
    )
}

export default AddressFields
