import AdaptableCard from '@/components/shared/AdaptableCard'
import RichTextEditor from '@/components/shared/RichTextEditor'
import Input from '@/components/ui/Input'
import { FormItem } from '@/components/ui/Form'
import { Field, FormikErrors, FormikTouched, FieldProps } from 'formik'

type FormFieldsName = {
    featureList: string
    // buildYear: number
}

type PropertyFeaturesFields = {
    touched: FormikTouched<FormFieldsName>
    errors: FormikErrors<FormFieldsName>
}

const PropertyFeaturesFields = (props: PropertyFeaturesFields) => {
    const { touched, errors } = props

    return (
        <AdaptableCard divider className="mb-4">
            <h5>Features</h5>
            <p className="mb-6">List of the features.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* <div className="col-span-1">
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
                </div> */}
                <div className="col-span-1">
                    <FormItem
                        label="Property Features"
                        invalid={(errors.featureList && touched.featureList) as boolean}
                        errorMessage={errors.featureList}
                    >
                        <Field component="textarea" rows="4" cols="40" name="featureList" placeholder="ex: swimming pool, patio, ceiling fans, walk-in kitchen pantry"></Field>
                        
                    </FormItem>
                </div>
            </div>
        </AdaptableCard>
    )
}

export default PropertyFeaturesFields
