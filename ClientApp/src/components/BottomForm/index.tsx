import "./styles.css"


const BottomForm = () => {
    return (
        <div className="buttom-container">
            <div>
                <button type="button" className="button ">Cancelar</button>
                <button type="submit" className="button button-outline">Guardar Borrador</button>
            </div>
            <div>
                <button type="submit" className="button button-submit">Guardar y continuar</button>
            </div>
        </div>
    )
}

export default BottomForm;