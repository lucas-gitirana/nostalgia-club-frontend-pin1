import CabecalhoSecao from '../CabecalhoSecao';
import CategoriaProdutos from '../CategoriaProdutos';
import './VitrineCategoria.css'

const VitrineCategoria = (props) => {
    return (
        <div className="vitrine-categoria">
            <CabecalhoSecao titulo={props.titulo} subtitulo={props.subtitulo}/>
            {props.categoriasProduto.map(categoria => <CategoriaProdutos tituloCategoria={categoria.tituloCategoria} itens={categoria.itens}/>)}
        </div>
    )
}

export default VitrineCategoria;