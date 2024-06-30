import AdaptableCard from '@/components/shared/AdaptableCard'
import RichTextEditor from '@/components/shared/RichTextEditor'
import Input from '@/components/ui/Input'
import { FormItem } from '@/components/ui/Form'
import { Field, FormikErrors, FormikTouched, FieldProps } from 'formik'

type FormFieldsName = {
    schoolDistrict: string
    subdivision: string
    buildYear: number
}

type MoreInformationFields = {
    touched: FormikTouched<FormFieldsName>
    errors: FormikErrors<FormFieldsName>
}

const MoreInformationFields = (props: MoreInformationFields) => {
    const { touched, errors } = props

    return (
        <AdaptableCard divider className="mb-4">
            <h5>More Property Details</h5>
            <p className="mb-6">Other imporant details of the residential real estate.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="col-span-1">
                    <FormItem
                        label="Built Year"
                        invalid={(errors.buildYear && touched.buildYear) as boolean}
                        errorMessage={errors.buildYear}
                    >
                        <Field
                            type="number"
                            autoComplete="off"
                            name="buildYear"
                            placeholder="Build Year"
                            component={Input}
                        />
                    </FormItem>
                </div>
                <div className="col-span-1">
                    <FormItem
                        label="School District"
                        invalid={(errors.schoolDistrict && touched.schoolDistrict) as boolean}
                        errorMessage={errors.schoolDistrict}
                    >
                        <Field
                            type="text"
                            autoComplete="off"
                            name="schoolDistrict"
                            placeholder="School District"
                            component={Input}
                        />
                    </FormItem>
                </div>
            </div>
            <FormItem
                label="Subdivision"
                invalid={(errors.subdivision && touched.subdivision) as boolean}
                errorMessage={errors.subdivision}
            >
                <Field
                    type="text"
                    autoComplete="off"
                    name="subdivision"
                    placeholder="Subdivision"
                    component={Input}
                />
            </FormItem>
        </AdaptableCard>
    )
}

export default MoreInformationFields
