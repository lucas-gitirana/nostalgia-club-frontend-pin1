import Banner from '../Banner';
import CategoriasBox from '../CategoriasBox';
import MaisVendidos from '../MaisVendidos';
import './HomePage.css'

const HomePage = () => {

    const maisVendidos = [
        {'nomeProduto': 'Disco - Nirvana', 'preco': 'R$ 99,99', 'imagem': 'imagens/produtos/disco-nirvana.png'},
        {'nomeProduto': 'Disco - Michael Jackson', 'preco': 'R$ 99,99', 'imagem': 'imagens/produtos/disco-michael-jackson.png'},
        {'nomeProduto': 'Nintendo 64', 'preco': 'R$ 99,99', 'imagem': 'imagens/produtos/nintendo-64.png'},
        {'nomeProduto': 'Vitrola', 'preco': 'R$ 99,99', 'imagem': 'imagens/produtos/vitrola.png'},
        {'nomeProduto': 'DVD Matrix', 'preco': 'R$ 99,99', 'imagem': 'imagens/produtos/dvd-matrix.png'},
        {'nomeProduto': 'Disco - Beatles', 'preco': 'R$ 99,99', 'imagem': 'imagens/produtos/disco-beatles.png'}            
      ]

    return (
        <div className="home-page">
            <Banner />
            <CategoriasBox />
            <MaisVendidos produtos={maisVendidos} />
        </div>
    )
}

export default HomePage;