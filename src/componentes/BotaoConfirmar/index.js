import { useNavigate } from 'react-router-dom';
import './BotaoConfirmar.css'

const BotaoComprar = () => {
    const navigate = useNavigate();
    const handleNavigate = () => {
        navigate('/meucarrinho');
    };

    return (
        <button className="botao-confirmar" onClick={handleNavigate}>
            CONFIRMAR
        </button>
    )
}

export default BotaoComprar