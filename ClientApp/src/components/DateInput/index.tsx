import { FieldProps } from "formik";
import Typography from "../Typography";
import { getLabel } from "../../locales";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const DateInput = ({ field, form, ...props }: FieldProps) => {
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        form.setFieldValue(field.name, e.target.value);
    };

    return (
        <div className="flex flex-col w-fit">
            <Typography type="h3" text={getLabel(`form.${field.name}`)} />
            <input
                {...field}
                {...props}
                type="date"
                onChange={handleChange}
                className="w-[200px] rounded-md shadow-md border border-black my-4"
            />
        </div>
    );
}

export default DateInput;