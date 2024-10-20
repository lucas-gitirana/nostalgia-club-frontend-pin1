import './App.css';
import Banner from './componentes/Banner';
import CategoriasBox from './componentes/CategoriasBox';
import Footer from './componentes/Footer';
import MaisVendidos from './componentes/MaisVendidos';
import Menu from "./componentes/Menu";

function App() {

  const maisVendidos = [
    {'nomeProduto': 'Disco - Nirvana', 'preco': 'R$ 99,99', 'imagem': 'imagens/produtos/disco-nirvana.png'},
    {'nomeProduto': 'Disco - Michael Jackson', 'preco': 'R$ 99,99', 'imagem': 'imagens/produtos/disco-michael-jackson.png'},
    {'nomeProduto': 'Nintendo 64', 'preco': 'R$ 99,99', 'imagem': 'imagens/produtos/nintendo-64.png'},
    {'nomeProduto': 'Vitrola', 'preco': 'R$ 99,99', 'imagem': 'imagens/produtos/vitrola.png'},
    {'nomeProduto': 'DVD Matrix', 'preco': 'R$ 99,99', 'imagem': 'imagens/produtos/dvd-matrix.png'},
    {'nomeProduto': 'Disco - Beatles', 'preco': 'R$ 99,99', 'imagem': 'imagens/produtos/disco-beatles.png'}            
  ]

  const contatos = [
    {'descricao': 'Instagram', 'link': 'http://localhost:3000/?'},
    {'descricao': 'TikTok', 'link': 'http://localhost:3000/?'},
    {'descricao': 'E-mail', 'link': 'http://localhost:3000/?'}
  ]

  const categorias = [
    {'nome': 'Mídias', 'link': 'http://localhost:3000/?'},
    {'nome': 'Dispositivos', 'link': 'http://localhost:3000/?'}
  ]

  return (
    <div className="app">
      <Menu />
      <Banner />
      <CategoriasBox />
      <MaisVendidos produtos={maisVendidos} />
      <Footer contatos={contatos} categorias={categorias}/>
    </div>
  );
}

export default App;
