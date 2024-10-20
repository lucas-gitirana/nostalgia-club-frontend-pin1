import './CardProduto.css'

const CardProduto = (props) => {
    return (
        <div className="card-produto">
            <div className="card-produto__capa">
                <img alt={props.nome} src={props.imagem}/>
            </div>
            <div className="card-produto__info">
                <span className="card-produto__info__titulo">{props.nome}</span>
                <span className="card-produto__info__preco">{props.preco}</span>
            </div>
        </div>
    )
}

export default CardProduto;