import { FieldProps } from "formik";
import { getLabel } from "../../locales";
import Typography from "../Typography";

interface InputOptionsProps extends FieldProps {
    options: string[];
}

const CheckboxInput = ({ field, form, options, ...props }: InputOptionsProps) => {
    return (
        <div className="flex flex-col">
            <Typography type="h3" text={getLabel(`form.${field.name}`)} />
            <div className="grid grid-flow-row grid-cols-4 gap-4 mt-4">
                {options.map((option: string) => {
                    return (
                        <div key={option}>
                            <input
                                disabled={form.isSubmitting}
                                type="checkbox"
                                {...field}
                                {...props}
                                checked={field.value.includes(option)}
                                value={option}
                            />
                            <label htmlFor={option} className="mx-2">{option}</label>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default CheckboxInput;