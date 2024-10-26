import './App.css';
import Comentarios from './componentes/Comentarios';
import ConsultaProduto from './componentes/ConsultaProduto';
import DetalhesPedido from './componentes/DetalhesPedido';
import Footer from './componentes/Footer';
import FormularioCadastro from './componentes/FormularioCadastro';
import FormularioLogin from './componentes/FormularioLogin';
import HomePage from './componentes/HomePage';
import Menu from "./componentes/Menu";
import MeuCarrinho from './componentes/MeuCarrinho';
import ProdutosRelacionados from './componentes/ProdutosRelacionados';
import TituloAcesso from './componentes/TituloAcesso';
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

  const infoProduto = [
    {
      'nome': 'Thriller - Michael jackson', 'tipo': 'Disco', 'preco': 'R$ 99,99', 'descricao': 'Lançado em 1982, "Thriller" é o álbum que redefiniu o cenário da música pop e se tornou uma lenda. Com uma mistura inovadora de pop, rock e R&B, o álbum apresentou sucessos como "Billie Jean", "Beat It" e a icônica faixa-título "Thriller". "Thriller" não é apenas um álbum; é um fenômeno cultural que continua a inspirar e encantar gerações. Experimente o legado imortal de Michael Jackson e descubra por que "Thriller" é eternamente o maior de todos os tempos.',
      'imagens': [
        { 'titulo': 'Foto Álbum Michael Jackson', 'caminho': 'imagens/produtos/disco-michael-jackson.png' },
        { 'titulo': 'Foto Álbum Michael Jackson', 'caminho': 'imagens/galeria-produtos/miniatura-mj-01.png' },
        { 'titulo': 'Foto Álbum Michael Jackson', 'caminho': 'imagens/galeria-produtos/miniatura-mj-02.png' },
        { 'titulo': 'Foto Álbum Michael Jackson', 'caminho': 'imagens/galeria-produtos/miniatura-mj-03.png' }
      ]
    }
  ]

  const produtosRelacionados = [
    { 'descricao': 'Disco - Beatles', 'preco': 'R$ 99,99', 'imagem': 'imagens/produtos/disco-beatles.png' },
    { 'descricao': 'Disco - Beatles', 'preco': 'R$ 99,99', 'imagem': 'imagens/produtos/disco-beatles.png' },
    { 'descricao': 'Disco - Beatles', 'preco': 'R$ 99,99', 'imagem': 'imagens/produtos/disco-beatles.png' }
  ]

  const comentarios = [
    { 'autor': 'Lucas Gitirana', 'mensagem': 'Cada faixa deste álbum é uma joia por si só, começando com o icônico título "Thriller", que combina uma batida contagiante com um videoclipe inovador que se tornou um clássico.'},
    { 'autor': 'João', 'mensagem': 'Cada faixa deste álbum é uma joia por si só, começando com o icônico título "Thriller", que combina uma batida contagiante com um videoclipe inovador que se tornou um clássico.'},
    { 'autor': 'Thassy', 'mensagem': 'Cada faixa deste álbum é uma joia por si só, começando com o icônico título "Thriller", que combina uma batida contagiante com um videoclipe inovador que se tornou um clássico.'}
  ]

  return (
    <div className="app">
      <Menu />

      {/* 1- Home */}
      {/* <HomePage /> */}

      {/* 2 - Mídias */}
      {/* <VitrineCategoria titulo="Mídias" subtitulo="Encontre aqui as obras que marcaram a sua vida" categoriasProduto={produtosMidias}/> */}

      {/* 3 - Dispositivos */}
      {/* <VitrineCategoria titulo="Dispositivos" subtitulo="Cria experiências incríveis com os aparelhos da sua vida" categoriasProduto={produtosDispositivos}/> */}

      {/* 4 - Tela de detalhes do produto */}
      {/* <ConsultaProduto infoProduto={infoProduto[0]} />
      <ProdutosRelacionados produtosRelacionados={produtosRelacionados}/>
      <Comentarios comentarios={comentarios}/> */}

      {/* 5 - Tela de Login */}
      {/* <FormularioLogin /> */}

      {/* 6 - Tela de Cadastro */}
      {/* <FormularioCadastro /> */}

      {/* 7 - Tela do Meu Carrinho */}
      {/* <MeuCarrinho /> */}

      {/* 8 - Tela de Detalhes do Pedido */}
      <DetalhesPedido />

      {/* Testes feitos com a Thassy */}
      {/* <FormularioDadosCartao /> */}

      <Footer contatos={contatos} categorias={categorias} />
    </div>
  );
}

export default App;
