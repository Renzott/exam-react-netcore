import { FieldProps } from "formik";
import "./styles.css"
import Typography from "../Typography";
import { getLabel } from "../../locales";

interface TargetChangeAttributes {
    target: {
        value: string;
    }
}

interface InputOptionsProps extends FieldProps {
    options: string[];
    onChange?: (e: TargetChangeAttributes) => void;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const SelectInput = ({ field, form, options, ...props }: InputOptionsProps) => {

    return (
        <div className="select-container">
            <Typography type="label" text={getLabel(`form.${field.name}`)} />
            <div>
                <select {...field} {...props} className="select-input"  onChange={
                    (e: TargetChangeAttributes) => {
                        if (props.onChange) {
                            props.onChange(e)
                        }
                        form.setFieldValue(field.name, e.target.value)
                    }
                }>
                    {options.map((option: string) => {
                        return (
                            <option key={option} value={option}>
                                {option}
                            </option>
                        );
                    })}
                </select>
            </div>
        </div>
    );
}

export default SelectInput;