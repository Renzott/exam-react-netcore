import { useEffect, useState } from "react";
import Typography from "../Typography";
import TeacherModal from "../TeacherModal";
import { getLabel } from "../../locales";
import { FieldProps } from "formik";

const TeacherForm = ({ field, form, ...props  }: FieldProps) => {
    const [openModal, setOpenModal] = useState(false);
    const [teacher, setTeacher] = useState("");
    const [otherTeacher, setOtherTeacher] = useState("")

    useEffect(() => {
        if (openModal){
            setTeacher("");
        }
    }, [openModal])

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        form.setFieldValue(field.name, e.target.value);
    }

    return (
        <>
            <Typography type="h3" text={getLabel("labels.teacher")} />
            <Typography type="subtitle" text={getLabel("labels.teacherSpan")} />
            {teacher && !openModal && <Typography type="span" text={`Docente: ${teacher}`} className="my-2" />}
            <button type="button" className="button-teacher" onClick={() => setOpenModal(true)}>{getLabel("labels.teacherButton")}</button>
            <span className="mx-4 font-semibold">ó</span>
            <input 
                type="text"
                className="rounded-md shadow-md border border-black py-1 px-1" 
                value={otherTeacher} 
                onChange={(e) => {
                    setOtherTeacher(e.target.value)
                    form.setFieldValue(field.name, e.target.value);
                }} />
            <TeacherModal isOpen={openModal} setModalClose={() => setOpenModal(false)} setTeacher={setTeacher} handleInput={handleChange} />
            <input
                type="hidden"
                {...field}
                {...props}
                onChange={handleChange}
            />
        </>

    )
}

export default TeacherForm;