import BotaoPadrao from '../BotaoPadrao'
import CardTotalPedido from '../CardTotalPedido'
import GridProdutosCarrinho from '../GridProdutosCarrinho'
import './MeuCarrinho.css'

const MeuCarrinho = () => {

    const cabecalho = [
        { 'titulo': 'Produto', 'classes': 'w-50 al-e' },
        { 'titulo': 'Preço', 'classes': 'w-15 al-e' },
        { 'titulo': 'Quantidade', 'classes': 'w-15 al-c' },
        { 'titulo': 'Subtotal', 'classes': 'w-15 al-c' },
    ]

    const itens = [
        {'IdItem':'123', 'dadosGrid': [
            {'valor': 'Thriller - Michael Jackson', 'classes': 'w-50 al-e'},
            {'valor': 'R$ 99,99', 'classes': 'w-15 al-e'},
            {'valor': '1', 'classes': 'w-15 al-c'},
            {'valor': 'R$ 99,99', 'classes': 'w-15 al-c'}
        ]},
        {'IdItem':'123', 'dadosGrid': [
            {'valor': 'Thriller - Michael Jackson', 'classes': 'w-50 al-e'},
            {'valor': 'R$ 99,99', 'classes': 'w-15 al-e'},
            {'valor': '1', 'classes': 'w-15 al-c'},
            {'valor': 'R$ 99,99', 'classes': 'w-15 al-c'}
        ]},
        {'IdItem':'123', 'dadosGrid': [
            {'valor': 'Thriller - Michael Jackson', 'classes': 'w-50 al-e'},
            {'valor': 'R$ 99,99', 'classes': 'w-15 al-e'},
            {'valor': '1', 'classes': 'w-15 al-c'},
            {'valor': 'R$ 99,99', 'classes': 'w-15 al-c'}
        ]},
        {'IdItem':'123', 'dadosGrid': [
            {'valor': 'Thriller - Michael Jackson', 'classes': 'w-50 al-e'},
            {'valor': 'R$ 99,99', 'classes': 'w-15 al-e'},
            {'valor': '1', 'classes': 'w-15 al-c'},
            {'valor': 'R$ 99,99', 'classes': 'w-15 al-c'}
        ]},
        {'IdItem':'123', 'dadosGrid': [
            {'valor': 'Thriller - Michael Jackson', 'classes': 'w-50 al-e'},
            {'valor': 'R$ 99,99', 'classes': 'w-15 al-e'},
            {'valor': '1', 'classes': 'w-15 al-c'},
            {'valor': 'R$ 99,99', 'classes': 'w-15 al-c'}
        ]},
        {'IdItem':'123', 'dadosGrid': [
            {'valor': 'Thriller - Michael Jackson', 'classes': 'w-50 al-e'},
            {'valor': 'R$ 99,99', 'classes': 'w-15 al-e'},
            {'valor': '1', 'classes': 'w-15 al-c'},
            {'valor': 'R$ 99,99', 'classes': 'w-15 al-c'}
        ]},
    ]

    const dadosTotal = {
        'subtotal': 'R$ 198,98', 'frete': 'R$ 27,90', 'total': 'R$ 227,90'
    }

    return (
        <section className="meu-carrinho">
            <h1>Meu Carrinho</h1>
            <GridProdutosCarrinho cabecalho={cabecalho} itens={itens}/>
            <div className="meu-carrinho__total">
                <CardTotalPedido subtotal={dadosTotal.subtotal} frete={dadosTotal.frete} total={dadosTotal.total}>
                    <BotaoPadrao titulo="Realizar Pagamento" link="/detalhes-pedido"/>
                </CardTotalPedido>
            </div>
        </section>
    )
}

export default MeuCarrinho