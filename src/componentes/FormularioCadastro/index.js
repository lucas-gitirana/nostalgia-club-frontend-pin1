import CamposLogin from '../CamposLogin'
import TituloAcesso from '../TituloAcesso'
import './FormularioCadastro.css'

const FormularioCadastro = () => {

    const campos = [
        { 'label': 'Nome completo', 'type': 'text' },
        { 'label': 'E-mail', 'type': 'text' },
        { 'label': 'Senha', 'type': 'password' },
        { 'label': 'Confirme a senha', 'type': 'password' },
    ]

    const acessarLogin = { 'texto': 'Já possui uma conta?', 'tituloLink': 'Log-in', 'link': 'http://localhost:3000/?' }

    return (
        <section className="formulario-cadastro">
            <div className="formulario-cadastro__capa"></div>
            <div className="formulario-cadastro__campos">
                <TituloAcesso titulo="Crie a sua conta" subtitulo="Insira seus detalhes abaixo" />
                <div className="formulario-cadastro__campos__itens">
                    <CamposLogin campos={campos} rodape={acessarLogin}/>
                </div>
            </div>
        </section>
    )
}

export default FormularioCadastro