import { useState } from "react";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import { Form, Formik } from "formik";
import "./styles.css"
import { getCurrentDate } from "../../utils";
import BottomForm from "../BottomForm";
import { useMutation } from "@tanstack/react-query";
import { postEvent } from "../../services";

const FormSteps = () => {

    const [currentStep, setCurrentStep] = useState(0);
    const mutation = useMutation({
        mutationFn: postEvent
    })


    return (
        <div className="stepForm-container">
            <Formik
                initialValues={{
                    title: '',
                    description: '',
                    districs: [],
                    place: 'Lugar',
                    campus: 'Vida universitaria',
                    capacity: '1',
                    typeEvent: 'Talleres de un dia',
                    teacher: '',
                    subEvent: 'Culturales',
                    date: getCurrentDate(),
                    graphicEvent: 'Manualidades',
                    hourStart: '06:00',
                    hourEnd: '07:00',
                }}
                onSubmit={(values) => {
                    console.log(values)
                    mutation.mutate(values)
                }}
            >
                <Form className="h-full relative">
                    {currentStep === 0 && <Step1 />}
                    {currentStep === 1 && <Step2 />}
                    {currentStep === 2 && <Step3 />}

                    <BottomForm step={currentStep} setStep={setCurrentStep} />
                </Form>
            </Formik>
        </div>
    )
}

export default FormSteps;