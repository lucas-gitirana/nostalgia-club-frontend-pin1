import CabecalhoConsultaProduto from '../CabecalhoConsultaProduto'
import DetalhesConsultaProdutos from '../DetalhesConsultaProduto'
import GaleriaFotosProduto from '../GaleriaFotosProduto'
import './ConsultaProduto.css'

const ConsultaProduto = (props) => {
    return (
        <div className="consulta-produto">
            <CabecalhoConsultaProduto tipoProduto="Disco" nomeProduto="Thriller - Michael Jackson" />
            <div className="consulta-produto__detalhes">
                <GaleriaFotosProduto miniaturas={props.infoProduto.imagens} />
                <DetalhesConsultaProdutos preco={props.infoProduto.preco} descricao={props.infoProduto.descricao} />
            </div>
        </div>
    )
}

export default ConsultaProduto