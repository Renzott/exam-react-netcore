import { FieldProps } from "formik";
import Typography from "../Typography";
import { getLabel } from "../../locales";

interface InputOptionsProps extends FieldProps {
    options: string[];
}

const RadiusInput = ({ field, form, options, ...props }: InputOptionsProps) => {
    return (
        <div className="flex flex-col w-fit my-4">
            <Typography type="h3" text={getLabel(`form.${field.name}`)} className="mt-2 mb-8" />
            <div className="flex flex-row w-auto place-content-between gap-2 flex-wrap">
                {options.map((option: string) => {
                    return (
                        <div key={option} className="flex flex-row items-center">
                            <input
                                type="radio"
                                {...field}
                                {...props}
                                disabled={form.isSubmitting}
                                value={option}
                                checked={field.value === option}
                            />
                            <Typography type="span" text={option} className="mx-3 font-normal" />
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default RadiusInput;