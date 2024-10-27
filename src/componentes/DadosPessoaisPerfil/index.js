import BotaoPadrao from '../BotaoPadrao'
import CampoPadrao from '../CampoPadrao'
import './DadosPessoaisPerfil.css'

const DadosPessoaisPerfil = () => {
    return (
        <section className="dados-pessoais-perfil">
            <h2>Informações Pessoais</h2>
            <form className="dados-pessoais-perfil__form">
                <CampoPadrao tamanho="w-100" type="text" label="Nome completo" />
                <CampoPadrao tamanho="w-100" type="text" label="E-mail" />
                <div className="agrupador">
                    <CampoPadrao tamanho="w-49" type="text" label="CPF" />
                    <CampoPadrao tamanho="w-49" type="date" label="Data de Nascimento" />
                </div>
                <CampoPadrao tamanho="w-100" type="text" label="Telefone" />
                <CampoPadrao tamanho="w-100" type="password" label="Alterar Senha" />
                <CampoPadrao tamanho="w-100" type="password" label="Confirmar Senha" />
                <div className="dados-pessoais-perfil__form__botoes">
                    <BotaoPadrao titulo="Desativar" tamanho="w-49" />
                    <BotaoPadrao titulo="Confirmar" tamanho="w-49" />
                </div>
            </form>
        </section>
    )
}

export default DadosPessoaisPerfil