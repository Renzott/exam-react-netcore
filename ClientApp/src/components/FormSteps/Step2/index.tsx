import { Field } from "formik";
import InputOptions from "../../InputOptions";
import CheckboxInput from "../../CheckBoxInput";
import InputText from "../../InputText";
import DateInput from "../../DateInput";

const Step2 = () => {

    return (
        <div>
            <div className="step-container">
            <div className="step-card">
                <Field id="campusList" name="campusList" component={CheckboxInput} options={["lima","Ica"]} />
                <Field id="capacity" name="capacity" component={InputText} fieldType="number" />
            </div>
            <div className="step-card">
                <Field id="location" name="location" component={InputOptions} options={["lima","Ica"]} />
                <Field id="date" name="date" component={DateInput} />
            </div>
            {/* <button type="button" onClick={() => setOpenModal(true)}>Open Modal</button>
            <TeacherModal isOpen={openModal} setOpenModal={setOpenModal} /> */}
            <button type="submit">Submit</button>
        </div>
        </div>
    )
}

export default Step2;