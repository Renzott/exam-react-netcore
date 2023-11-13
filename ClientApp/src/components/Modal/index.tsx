import "./styles.css"

interface ModalProps {
    children: React.ReactNode;
    isOpen: boolean;
    onClose: () => void;
}

const Modal = ({ children, isOpen, onClose }: ModalProps) => {
    
    return (
        <div className={`modal ${isOpen ? 'modal-open' : 'modal-close'}`}>
            <div className="modal-overlay" onClick={onClose}/>
            <div className="modal-container">
                <div className="modal-content">
                    {children}
                </div>
            </div>
        </div>
    )
}

export default Modal;