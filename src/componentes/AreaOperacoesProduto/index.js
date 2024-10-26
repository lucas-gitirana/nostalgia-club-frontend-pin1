import CampoFrete from '../CampoFrete'
import BotaoQuantidadeCompra from '../BotaoQuantidadeCompra'
import BotaoConfirmar from '../BotaoConfirmar'
import './AreaOperacoesProduto.css'

const AreaOperacoesProduto = () => {
    return (
        <div className="area-operacoes-produto">
            <div className="botoes-compra">
                <BotaoQuantidadeCompra />
                <BotaoConfirmar />
            </div>
            <CampoFrete />
            <span className="info-prazo">Prazo: 6 a 10 dias úteis</span>
        </div>
    )
}

export default AreaOperacoesProduto