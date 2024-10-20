import './MenuBotao.css';

const MenuBotao = (props) => {
    return (
        <div className="menu-botao" width={props.width} heigth={props.heigth}>
            {props.children}
        </div>
    );
}

export default MenuBotao;