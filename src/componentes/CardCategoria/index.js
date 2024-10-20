import './CardCategoria.css'

const CardCategoria = (props) => {
    return (
        <div className="card-categoria">
            <img src={props.imgSrc} alt={props.imgAlt} />
            <span>{props.descricao}</span>
        </div>
    )
}

export default CardCategoria;