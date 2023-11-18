import { FieldProps } from "formik"
import { getLabel } from "../../locales";
import Typography from "../Typography";

interface InputOptionsProps extends FieldProps {
    fieldType: string;
}

const InputText = ({ field, form, fieldType, ...props }: InputOptionsProps) => {
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {         
        if (fieldType === "number") {
            const re = /^[0-9\b]+$/;
            if (e.target.value === '' || re.test(e.target.value)) {
                form.setFieldValue(field.name, e.target.value);
            }
            if (e.target.value === '0') {
                window.alert("El primer numero no puede ser 0");
                form.setFieldValue(field.name, '');
            }
        }
    };

    return (
        <div className="flex flex-col gap-3 mt-8">
            <Typography type="span" text={getLabel(`form.${field.name}`)} />
            <div>
            <input
                {...field}
                {...props}
                disabled={form.isSubmitting}
                onChange={handleChange}
                className="rounded-md shadow-md border border-black py-1 px-1 w-[120px]"
            /><span className="text-gray-500 text-sm mx-2">* Solo se permite numeros</span>
            </div>
        </div>
    );
  };

export default InputText;