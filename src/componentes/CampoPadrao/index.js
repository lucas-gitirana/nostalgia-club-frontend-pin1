import './CampoPadrao.css'

const CampoPadrao = (props) => {
    return (
        <div className="campo-padrao">
            <label>{props.label}</label>
            <input type={props.type} placeholder={props.placeholder}></input>            
        </div>
    )
}

export default CampoPadrao