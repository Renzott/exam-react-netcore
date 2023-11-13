import { FieldProps } from "formik";
import "./styles.css"
import Typography from "../Typography";
import { getLabel } from "../../locales";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const TextArea = ({ field, form, ...props }: FieldProps) => {
  return (
    <div className="textArea-container">
      <Typography type="span" text={getLabel(`form.${field.name}`)} />
      <textarea {...field} {...props} className="textArea" />
    </div>
  );
};

export default TextArea;