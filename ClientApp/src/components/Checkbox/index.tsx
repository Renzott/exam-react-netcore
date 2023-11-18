import { FieldProps } from "formik";
import Typography from "../Typography";
import { getLabel } from "../../locales";

const Checkbox = ({ field, form, ...props }: FieldProps) => {
    return (
        <div className="flex flex-row w-full gap-3">
            <Typography type="span" text={getLabel(`form.${field.name}`)} />
            <input
                type="checkbox"
                disabled={form.isSubmitting}
                {...field} {...props} />
        </div>
    );
}

export default Checkbox;