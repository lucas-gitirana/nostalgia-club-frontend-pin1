import './CamposLogin.css'
import CampoPadrao from '../CampoPadrao'
import BotaoPadrao from '../BotaoPadrao'

const CamposLogin = (props) => {
    return (
        <form className="campos-login">
            {props.campos.map(campo => <CampoPadrao type={campo.type} label={campo.label}/>)}
            <div className="rodape">
                <BotaoPadrao titulo="Acessar"/>
                <span className="rodape__cadastre-se">{props.rodape.texto} <a href={props.rodape.link}>{props.rodape.tituloLink}</a></span>
            </div>
        </form>
    )
}

export default CamposLogin