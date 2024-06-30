import AdaptableCard from '@/components/shared/AdaptableCard'
import { FormItem } from '@/components/ui/Form'
import Input from '@/components/ui/Input'
import { Field, FormikErrors, FormikTouched, FieldProps } from 'formik'

type FormFieldsName = {
    name: string
    description: string
}

type FeatureFieldsProps = {
    touched: FormikTouched<FormFieldsName>
    errors: FormikErrors<FormFieldsName>
    featureNumber: number
}

const FeatureFields = (props: FeatureFieldsProps) => {
    const {touched, errors } = props

    return (
        <AdaptableCard divider className="mb-4">
                <h6>Feature # {props.featureNumber + 1}</h6>
                <br/>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="col-span-1">
                    <FormItem
                        label="Name"
                        invalid={(errors.name && touched.name) as boolean}
                        errorMessage={errors.name}
                    >
                        <Field
                            type="text"
                            autoComplete="off"
                            name={"features[" + props.featureNumber + "].name"}
                            placeholder="Name"
                            component={Input}
                        />
                    </FormItem>
                </div>
                <div className="col-span-1">
                    <FormItem
                        label="Description"
                        invalid={(errors.description && touched.description) as boolean}
                        errorMessage={errors.description}
                    >
                        <Field
                            type="text"
                            autoComplete="off"
                            name={"features[" + props.featureNumber + "].description"}
                            placeholder="Description"
                            component={Input}
                        />
                    </FormItem>
                </div></div>
        
        </AdaptableCard>
    )
}

export default FeatureFields
