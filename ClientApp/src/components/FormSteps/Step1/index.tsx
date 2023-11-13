import { Field } from "formik";
import "./styles.css"
import TextArea from "../../TextArea";
import Typography from "../../Typography";
import { getLabel } from "../../../locales";
import EventsSelect from "../../EventsSelect";
import InputOptions from "../../InputOptions";
import RadiusInput from "../../RadiusInput";
import TeacherForm from "../../TeacherForm";
import CheckboxInput from "../../CheckBoxInput";
import { DISTRICS, HOURS_END, HOURS_START } from "../../../constants";
import InputText from "../../InputText";
import DateInput from "../../DateInput";
import SelectInput from "../../SelectInput";

const Step1 = () => {

    return (
        <div className="step-container">
            <div className="step-card">
                <Typography type="h3" text={getLabel("labels.infoTitle")} />
                <Typography type="subtitle" text={getLabel("labels.infoDescription")} />
                <div className="step-subcard">
                    <Field id="title" name="title" component={TextArea} maxLength={100} />
                    <Field id="description" name="description" component={TextArea} maxLength={400} />
                </div>
            </div>

            <div className="step-card">
                <Typography type="h3" text={getLabel("labels.eventTitle")} />
                <Typography type="subtitle" text={getLabel("labels.eventDescription")} />
                <div className="step-subcard w-[40%] gap-3">
                    <EventsSelect />
                </div>
                <Field
                    id="graphicEvent"
                    name="graphicEvent"
                    component={InputOptions}
                    options={["Manualidades", 'Musica', 'Baile', 'Teatro', 'Expresion']} />
            </div>
            <div className="step-card">
                <Field
                    id="campus"
                    name="campus"
                    component={RadiusInput}
                    options={["Vida universitaria", "Empleabilidad", "Internacional", "Consejería", "Salud", "Responsabilidad Social", "Académico"]}
                />
                <div className="teacher-card">
                    <Field
                        id="teacher"
                        name="teacher"
                        component={TeacherForm}
                    />
                </div>
                <Field id="districs" name="districs" component={CheckboxInput} options={DISTRICS} />
                <Field id="capacity" name="capacity" component={InputText} fieldType="number" />
                <Field
                    id="place"
                    name="place"
                    component={RadiusInput}
                    options={["Lugar", "Zoom"]}
                />
            </div>
            <div className="step-card">
                <Field id="date" name="date" component={DateInput} />
                <div className="grid grid-cols-2 grid-flow-row w-[500px]">
                    <Field id='hourStart' name='hourStart' component={SelectInput} options={HOURS_START} />
                    <Field id='hourEnd' name='hourEnd' component={SelectInput} options={HOURS_END} />
                </div>
            </div>
        </div>
    )
}

export default Step1;