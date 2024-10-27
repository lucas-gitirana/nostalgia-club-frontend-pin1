import { Outlet } from 'react-router-dom'
import MenuDadosPerfil from '../MenuDadosPerfil'
import './DadosPerfil.css'

const DadosPerfil = () => {
    return (
        <section className="dados-perfil">
            <div className="dados-perfil__menu">
                <MenuDadosPerfil/>
            </div>
            <div className="dados-perfil__secao">
                <Outlet/>
            </div>
        </section>
    )
}

export default DadosPerfil