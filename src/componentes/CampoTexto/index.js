import './CampoTexto.css'

const CampoTexto = (props) => {
    return (
        <div className="campo-texto">
            <label>{props.label}</label>
            <input type="text"></input>            
        </div>
    )
}

export default CampoTexto