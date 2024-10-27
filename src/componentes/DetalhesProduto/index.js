import Comentarios from '../Comentarios'
import ConsultaProduto from '../ConsultaProduto'
import ProdutosRelacionados from '../ProdutosRelacionados'
import './DetalhesProduto.css'

const DatelhesProduto = () => {

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
        { 'autor': 'Lucas Gitirana', 'mensagem': 'Cada faixa deste álbum é uma joia por si só, começando com o icônico título "Thriller", que combina uma batida contagiante com um videoclipe inovador que se tornou um clássico.' },
        { 'autor': 'João', 'mensagem': 'Cada faixa deste álbum é uma joia por si só, começando com o icônico título "Thriller", que combina uma batida contagiante com um videoclipe inovador que se tornou um clássico.' },
        { 'autor': 'Thassy', 'mensagem': 'Cada faixa deste álbum é uma joia por si só, começando com o icônico título "Thriller", que combina uma batida contagiante com um videoclipe inovador que se tornou um clássico.' }
    ]

    return (
        <section className="detalhes-produto">
            <ConsultaProduto infoProduto={infoProduto[0]} />
            <ProdutosRelacionados produtosRelacionados={produtosRelacionados} />
            <Comentarios comentarios={comentarios} />
        </section>
    )
}

export default DatelhesProduto;