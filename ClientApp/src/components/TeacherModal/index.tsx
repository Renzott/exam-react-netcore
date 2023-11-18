import { useQuery } from "@tanstack/react-query";
import Modal from "../Modal";
import { searchTeachersQuery } from "../../services";
import { useState } from "react";
import SearchSelect from "./SearchSelect";

interface ModalProps {
    setModalClose: (value: boolean) => void;
    setTeacher: (value: string) => void;
    isOpen: boolean;
    handleInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const TeacherModal = ({ isOpen, setModalClose, setTeacher, handleInput }: ModalProps) => {

    const [query, setQuery] = useState("")
    const { data } = useQuery(
        {
            queryKey: ["searchTeachers",query],
            queryFn: () => searchTeachersQuery(query),
        }
    );

    return (
        <Modal isOpen={isOpen} onClose={() => setModalClose(false)}>
            <>
                <SearchSelect data={data} setQuery={setQuery} handleSelectOption={setTeacher} handleInput={handleInput} />
                <div className="flex justify-center mt-20">
                    <button onClick={() => setModalClose(false)} className="bg-gray-500 text-white px-4 py-2 rounded-md">Seleccionar</button>
                </div>
            </>
        </Modal>
    );
}

export default TeacherModal;