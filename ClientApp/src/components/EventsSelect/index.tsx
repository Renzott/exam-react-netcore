import { Field } from "formik";
import SelectInput from "../SelectInput";
import { useState } from "react";

interface TargetChangeAttributes {
    target: {
        value: string;
    }
}

const EventsSelect = () => {

    const [typeEvent, setTypeEvent] = useState('Talleres de un dia')

    const subTitleConditions = (typeEvent: string) => {
        switch (typeEvent) {
            case 'Talleres de un dia':
            case 'Talleres con Programacion':
                return ['Culturales', 'Deportivos']
            default:
                return ['Culturales', 'Deportivos', 'Academicos', 'Salud', 'Consejeria', 'Responsabilidad Social']
        }
    }
    
    return (
        <>
            <Field
                id="typeEvent"
                name="typeEvent"
                component={SelectInput}
                onChange={(e: TargetChangeAttributes) => setTypeEvent(e.target.value)}
                options={['Talleres de un dia', 'Talleres con Programacion', 'Conferencias', 'Concursos', 'Activaciones', 'Otros']}
            />
            <Field
                id="subEvent"
                name="subEvent"
                component={SelectInput}
                options={subTitleConditions(typeEvent)}
            />
        </>
    )
}

export default EventsSelect;