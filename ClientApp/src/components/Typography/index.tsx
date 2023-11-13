interface TypographyProps {
    type: 'h1' | 'h2' | 'h3' | 'span' | 'p' | 'label' | 'subtitle';
    text: string;
    className?: string;
}

const Typography = ({ type, text, className }: TypographyProps) => {

    const typeClassname = () => {
        switch (type) {
            case 'h1':
                return 'text-4xl font-bold';
            case 'h2':
                return 'text-3xl font-bold';
            case 'h3':
                return 'text-2xl font-bold';
            case 'span':
                return 'text-sm font-bold';
            case 'p':
                return 'text-sm font-normal';
            case 'subtitle':
                return 'text-sm font-norma text-gray-500';
            case 'label':
                return 'text-sm font-bold';
            default:
                return 'text-sm font-normal';
        }
    }

    return (
        <div className={`${className} flex flex-col ${typeClassname()}`}>
            {type === 'h1' && <h1>{text}</h1>}
            {type === 'h2' && <h2>{text}</h2>}
            {type === 'h3' && <h3>{text}</h3>}
            {type === 'span' && <span>{text}</span>}
            {type === 'subtitle' && <span>{text}</span>}
            {type === 'p' && <p>{text}</p>}
            {type === 'label' && <label>{text}</label>}
        </div>
    )
}

export default Typography;