import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'

function Navbar() {

    return (
        <header className="cabecalho">
            <img className="logo" src="https://th.bing.com/th/id/OIP.pMWOALismq9TpjxEMTqXfAHaD4?rs=1&pid=ImgDetMain"
                alt="A logo do site Game Master's Gazette, um dado de 20 lados." />
            <nav className="menu">
                <ul className="menu__lista">
                    <li className="menu__item">
                        <Link to="/inicio" className="menu__link ativo">Início</Link>
                    </li>
                    <li className="menu__item">
                        <Link to='/funcionalidades' className="menu__link">Funcionalidades</Link>
                    </li>
                    <li className="menu__item">
                        <a href='#como-funciona' className="menu__link">Como funciona?</a>
                    </li>
                    <li className="menu__item">
                        <Link to='/parceiros' className="menu__link">Nossos parceiros</Link>
                    </li>
                    <li className="menu__item">
                        <Link to='/quem-somos' className="menu__link">Sobre nós</Link>
                    </li>
                    <li className="menu__item">
                        <Link to='/comunidade' className="menu__link">Blog</Link>
                    </li>
                    <li className="menu__item">
                        <Link to='/login' className="menu__link">Entrar</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );

}

export default Navbar