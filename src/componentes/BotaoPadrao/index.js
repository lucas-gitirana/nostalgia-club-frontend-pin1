import './BotaoPadrao.css'

const BotaoPadrao = (props) => {
    return (
        <button className="botao-padrao">
            {props.titulo}
        </button>
    )
}

export default BotaoPadrao