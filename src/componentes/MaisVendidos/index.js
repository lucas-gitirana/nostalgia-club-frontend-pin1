import CabecalhoSecao from '../CabecalhoSecao';
import CardProduto from '../CardProduto';
import './MaisVendidos.css';

const MaisVendidos = (props) => {

    return (
        <section className="mais-vendidos">
            <CabecalhoSecao titulo="Mais Vendidos" subtitulo="Conheça os produtos que mais arrasam por aqui"/>
            <div className="mais-vendidos__produtos">
                {props.produtos.map(produto => <CardProduto nome={produto.nomeProduto} preco={produto.preco} imagem={produto.imagem} />)}
            </div>
        </section>
    )
}

export default MaisVendidos;