import MenuBotao from '../MenuBotao';
import BarraPesquisa from '../BarraPesquisa';
import './Menu.css';

const Menu  = () => {
    return(
        <nav className="menu">
            <div className="menu-nav-options">
                <img alt='Logo' src="imagens/logo-nclub.png" height="70rem"></img>
                <MenuBotao>home</MenuBotao>
                <MenuBotao>gerenciar</MenuBotao>                
            </div>

            <BarraPesquisa placeholder="O que você quer encontrar hoje?"/>

            <div className="menu-perfil-options">
                <MenuBotao>
                    <img alt='Carrinho' src="imagens/carrinho-icon.png"></img>
                </MenuBotao>
                <MenuBotao>
                    <img alt='Perfil' src="imagens/perfil-icon.png"></img>
                </MenuBotao>
            </div>
        </nav>
    )
}

export default Menu;