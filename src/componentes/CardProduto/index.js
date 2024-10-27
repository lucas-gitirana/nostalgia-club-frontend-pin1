import './CardProduto.css'

const CardProduto = (props) => {
    return (
        <div className="card-produto" href='/home'>
            <a className="card-produto__capa" href='/detalhes-produto'>
                <img alt={props.nome} src={props.imagem}/>
            </a>
            <div className="card-produto__info">
                <span className="card-produto__info__titulo">{props.nome}</span>
                <span className="card-produto__info__preco">{props.preco}</span>
            </div>
        </div>
    )
}

export default CardProduto;