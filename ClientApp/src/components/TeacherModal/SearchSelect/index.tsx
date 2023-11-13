import { useEffect, useState } from "react";
import "./styles.css"
import Typography from "../../Typography";

interface Teachers {
    id: number;
    username: string;
    email: string;
}

interface SearchInputProps {
    data: Teachers[];
    setQuery: (value: string) => void;
    handleSelectOption: (value: string) => void;
    handleInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const SearchSelect = ({ data = [], setQuery, handleSelectOption, handleInput }: SearchInputProps) => {

    const [text, setText] = useState("")
    const [hidden, setHidden] = useState(true)

    useEffect(() => {
        const timeout = setTimeout(() => {
            if (text.length === 0)
                setHidden(true)
            setQuery(text)
        }, 500);
        return () => clearTimeout(timeout);
    }, [text, setQuery]);

    const handleSelect = (teacher: Teachers) => {
        setText(teacher.username)
        handleSelectOption(teacher.username)
        handleInput({ target: { value: teacher.username } } as React.ChangeEvent<HTMLInputElement>)
        setHidden(true)
    }

    const handleTextChange = (value: string) => {
        setText(value)
        if (value === text)
            setHidden(false)
        else if (value.length === 0)
            setHidden(true)
        else setHidden(false)
    }

    return (
        <div>
            <Typography type="h3" text="Buscar al Docente" className="text-center mt-4" />
            <div className="search-container">
                <input type="search" onChange={(e) => {
                    handleTextChange(e.target.value)
                }} className="search-input" value={text} />

            </div>
            <div className={`search-results ${hidden ? 'hidden' : 'block'}`} onClick={() => setHidden(!hidden)}>
                {data.map((teacher) => (
                    <div key={teacher.id} className="search-option" onClick={() => handleSelect(teacher)}>
                        <Typography type="p" text={teacher.username} />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default SearchSelect;