import React from "react";
import FormularioLogin from "./componentes/FormularioLogin";
import HomePage from "./componentes/HomePage";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import FormularioCadastro from "./componentes/FormularioCadastro";
import MeuCarrinho from "./componentes/MeuCarrinho";
import VitrineCategoria from "./componentes/VitrineCategoria";
import DetalhesProduto from "./componentes/DetalhesProduto";
import DetalhesPedido from "./componentes/DetalhesPedido";
import DadosPerfil from "./componentes/DadosPerfil";
import DadosPessoaisPerfil from "./componentes/DadosPessoaisPerfil";
import DadosPessoaisEnderecos from "./componentes/DadosPessoaisEnderecos";
import PaginaBase from "./componentes/PaginaBase";
import EditarEndereco from "./componentes/EditarEndereco";
import PedidosRealizados from "./componentes/PedidosRealizados";

const AppRoutes = () => {

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
        <Router>
            <Routes>
                <Route path='/' element={<PaginaBase/>}>
                    <Route index element={<FormularioLogin/>}></Route>
                    <Route path='/cadastro' element={<FormularioCadastro/>}></Route>
                    <Route path='/home' element={<HomePage/>}></Route>
                    <Route path='/meucarrinho' element={<MeuCarrinho/>}></Route>
                    <Route path='/midias' element={<VitrineCategoria titulo="Mídias" subtitulo="Encontre aqui as obras que marcaram a sua vida" categoriasProduto={produtosMidias}/>}></Route>
                    <Route path='/dispositivos' element={<VitrineCategoria titulo="Dispositivos" subtitulo="Cria experiências incríveis com os aparelhos da sua vida" categoriasProduto={produtosDispositivos}/>}></Route>
                    <Route path='/detalhes-produto' element={<DetalhesProduto />}></Route>
                    <Route path='/detalhes-pedido' element={<DetalhesPedido />}></Route>
                    
                    <Route path='/perfil' element={<DadosPerfil />}>
                      <Route index element={<DadosPessoaisPerfil />}></Route>
                      <Route path="/perfil/enderecos" element={<DadosPessoaisEnderecos />}></Route>
                      <Route path="/perfil/editar-endereco" element={<EditarEndereco />}></Route>
                      <Route path="/perfil/pedidos-realizados" element={<PedidosRealizados />}></Route>
                    </Route>
                </Route>
            </Routes>
        </Router>
    )
}

export default AppRoutes