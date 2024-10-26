import CardComentario from '../CardComentario'
import './Comentarios.css'

const Comentarios = (props) => {
    return (
        <section className="comentarios">
            <h3>Comentários</h3>
            <div className="comentarios__cards">
                {props.comentarios.map(comentario => <CardComentario autor={comentario.autor} mensagem={comentario.mensagem} />)}
            </div>
        </section>
    )
}

export default Comentarios