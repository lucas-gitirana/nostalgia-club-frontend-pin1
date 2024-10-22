import './App.css';
import Footer from './componentes/Footer';
import HomePage from './componentes/HomePage';
import Menu from "./componentes/Menu";
import VitrineCategoria from './componentes/VitrineCategoria';

function App() {

  const contatos = [
    { 'descricao': 'Instagram', 'link': 'http://localhost:3000/?' },
    { 'descricao': 'TikTok', 'link': 'http://localhost:3000/?' },
    { 'descricao': 'E-mail', 'link': 'http://localhost:3000/?' }
  ]

  const categorias = [
    { 'nome': 'Mídias', 'link': 'http://localhost:3000/?' },
    { 'nome': 'Dispositivos', 'link': 'http://localhost:3000/?' }
  ]

  const produtosMidias = [
    {
      'tituloCategoria': 'Discos', 'itens': [
        { 'descricao': 'Disco - Beatles', 'preco': 'R$ 99,99', 'imagem': 'imagens/produtos/disco-beatles.png' },
        { 'descricao': 'Disco - Beatles', 'preco': 'R$ 99,99', 'imagem': 'imagens/produtos/disco-beatles.png' },
        { 'descricao': 'Disco - Beatles', 'preco': 'R$ 99,99', 'imagem': 'imagens/produtos/disco-beatles.png' }]
    },
    {
      'tituloCategoria': 'Fitas - Música', 'itens': [
        { 'descricao': 'Fitas - Sony', 'preco': 'R$ 99,99', 'imagem': 'imagens/produtos/fita-sony.png' },
        { 'descricao': 'Fitas - Sony', 'preco': 'R$ 99,99', 'imagem': 'imagens/produtos/fita-sony.png' },
        { 'descricao': 'Fitas - Sony', 'preco': 'R$ 99,99', 'imagem': 'imagens/produtos/fita-sony.png' }]
    },
    {
      'tituloCategoria': 'DVD\'s', 'itens': [
        { 'descricao': 'DVD - Matrix', 'preco': 'R$ 99,99', 'imagem': 'imagens/produtos/dvd-matrix.png' },
        { 'descricao': 'DVD - Matrix', 'preco': 'R$ 99,99', 'imagem': 'imagens/produtos/dvd-matrix.png' },
        { 'descricao': 'DVD - Matrix', 'preco': 'R$ 99,99', 'imagem': 'imagens/produtos/dvd-matrix.png' }]
    }
  ]

  const produtosDispositivos = [
    {
      'tituloCategoria': 'Vídeo-Games', 'itens': [
        { 'descricao': 'Nintendo 64', 'preco': 'R$ 99,99', 'imagem': 'imagens/produtos/nintendo-64.png' },
        { 'descricao': 'Nintendo 64', 'preco': 'R$ 99,99', 'imagem': 'imagens/produtos/nintendo-64.png' },
        { 'descricao': 'Nintendo 64', 'preco': 'R$ 99,99', 'imagem': 'imagens/produtos/nintendo-64.png' }]
    },
    {
      'tituloCategoria': 'Walkmen\'s', 'itens': [
        { 'descricao': 'Walkmen', 'preco': 'R$ 99,99', 'imagem': 'imagens/produtos/walkmen.png' },
        { 'descricao': 'Walkmen', 'preco': 'R$ 99,99', 'imagem': 'imagens/produtos/walkmen.png' },
        { 'descricao': 'Walkmen', 'preco': 'R$ 99,99', 'imagem': 'imagens/produtos/walkmen.png' }]
    },
    {
      'tituloCategoria': 'Vitrolas', 'itens': [
        { 'descricao': 'Vitrolas', 'preco': 'R$ 99,99', 'imagem': 'imagens/produtos/vitrola.png' },
        { 'descricao': 'Vitrolas', 'preco': 'R$ 99,99', 'imagem': 'imagens/produtos/vitrola.png' },
        { 'descricao': 'Vitrolas', 'preco': 'R$ 99,99', 'imagem': 'imagens/produtos/vitrola.png' }]
    }
  ]

  return (
    <div className="app">
      <Menu />
      <HomePage />
      <VitrineCategoria titulo="Mídias" subtitulo="Encontre aqui as obras que marcaram a sua vida" categoriasProduto={produtosMidias}/>
      <VitrineCategoria titulo="Dispositivos" subtitulo="Cria experiências incríveis com os aparelhos da sua vida" categoriasProduto={produtosDispositivos}/>
      <Footer contatos={contatos} categorias={categorias} />
    </div>
  );
}

export default App;
