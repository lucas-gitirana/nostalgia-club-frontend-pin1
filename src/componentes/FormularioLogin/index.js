import CamposLogin from '../CamposLogin'
import TituloAcesso from '../TituloAcesso'
import './FormularioLogin.css'

const FormularioLogin = () => {
    const campos = [
        { 'label': 'E-mail', 'type': 'text' },
        { 'label': 'Senha', 'type': 'password' }
    ]

    const acessarCadastro = { 'texto': 'Ainda não possui uma conta?', 'tituloLink': 'Cadastre-se', 'link': 'http://localhost:3000/?' }

    return (
        <section className="formulario-login">
            <div className="formulario-login__capa"></div>
            <div className="formulario-login__campos">
                <TituloAcesso titulo="Faça Log-in" subtitulo="Insira seus detalhes abaixo"/>
                <div className="formulario-login__campos__itens">
                    <CamposLogin campos={campos} rodape={acessarCadastro}/>
                </div>
            </div>
        </section>
    )
}

export default FormularioLogin