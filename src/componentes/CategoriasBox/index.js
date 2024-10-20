import CabecalhoSecao from '../CabecalhoSecao';
import CardCategoria from '../CardCategoria';
import './CategoriasBox.css';

const CategoriasBox = () => {
    return (
        <section className="categorias-box">
            <CabecalhoSecao titulo="Categorias" subtitulo="Conheça nossos principais tipos de produtos" />
            <div className="categorias-box__cards">
                <CardCategoria descricao="Mídias" imgSrc="imagens/card-midias.png" imgAlt="Mídias"/>
                <CardCategoria descricao="Dispositivos" imgSrc="imagens/card-dispositivos.png" imgAlt="Dispositivos"/>
            </div>
        </section>
    );
}

export default CategoriasBox;