import { useNavigate } from 'react-router-dom';
import './BotaoPadrao.css'

const BotaoPadrao = (props) => {
    const navigate = useNavigate();
    const handleNavigate = () => {
        navigate(props.link);
    };

    return (
        <button className={"botao-padrao " + props.tamanho} onClick={handleNavigate}>
            {props.titulo}
        </button>
    )
}

export default BotaoPadrao