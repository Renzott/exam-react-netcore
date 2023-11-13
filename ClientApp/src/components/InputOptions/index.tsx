import { FieldProps } from "formik";
import Typography from "../Typography";
import { getLabel } from "../../locales";
import "./styles.css"
import crafts from '../../assets/crafts.png'
import dance from '../../assets/dance.png'
import music from '../../assets/music.png'
import theater from '../../assets/theatre.png'
import expression from '../../assets/expression.png'

interface InputOptionsProps extends FieldProps {
    options: string[];
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const InputOptions = ({ field, form, options, ...props }: InputOptionsProps) => {

    const getImages = (option: string) => {
        
        switch (option) {
            case 'Manualidades':
                return crafts
            case 'Musica':
                return music
            case 'Baile':
                return dance
            case 'Teatro':
                return theater
            case 'Expresion':
                return expression
            default:
                return ''
        }
    }

    return (
        <div className="flex flex-col w-fit my-2">
            <Typography type="label" text={getLabel(`form.${field.name}`)} />
            <Typography type="subtitle" text={getLabel(`labels.${field.name}Label`)} />
            <div className="flex flex-row w-auto place-content-between gap-2">
                {options.map((option: string) => {
                    return (
                        <div key={option} className="flex flex-row items-center">
                            <input
                                type="radio"
                                {...field}
                                {...props}
                                value={option}
                                checked={field.value === option}
                                className="hidden"
                            />
                            <div className="flex flex-col items-center">
                                <div 
                                    className={field.value === option ? "option-card checked" : "option-card"}
                                    onClick={() => form.setFieldValue(field.name, option)}
                                    >
                                        <img src={getImages(option)} alt={option} className="option-image" />
                                    </div>
                                    <Typography type="label" text={option} />
                            </div>
                        </div>
                    );
                }
                )}
            </div>
        </div>
    );
};

export default InputOptions;