import { Link, useRoutes } from 'react-router-dom';
import Logo from '../components/Logo';
import './Header.css'
import BurgerButton from '../components/BurgerButton';
import Dropdown from '../components/Dropdown';


const getTexts = (lang) => {
    const map = {
        es: {
            home: 'Home',
            products: 'Productos',
            about: 'About us',
            foryou: 'Para ti',
            contact: 'Contactanos',
            login: 'Log in',
            download: 'Descarga la app'
        },
        en: {
            home: 'Home',
            products: 'Products',
            about: 'About us',
            foryou: 'For you',
            contact: 'Contact us',
            login: 'Log in',
            download: 'Download app'
        }
    }

    return map[lang];
}

export default function Header({theme, lang = 'en'}){
    const copy = getTexts(lang)

    const links = [
        { url:'/', name:copy.home},
        { url:'/products', name:copy.products},
        { url:'/about', name:copy.about},
        { url:'/for-you', name:copy.foryou},
        { url:'/contact-us', name:copy.contact},
        { url:'https://secure.giveandget.io/', name:copy.login },
        { url:'/downloads', name:copy.download}    
    ];


    return (
        <header className="header">
            <Logo theme={theme}></Logo>
            
            <Dropdown
                closable={true}
                theme={theme}
                header={Logo}
                trigger={BurgerButton}
                items={ links.map( (link) => {
                    return(<Link to={link.url}>{link.name}</Link>)
                }) }
            ></Dropdown>

            <nav className='nav'>
                <ul className='nav__links'>
                    {
                        links.map((link, key) => {
                            return (
                            <li className="nav__link" key={key}>
                                <Link to={link.url}>{link.name}</Link>
                            </li>)
                        })
                    }
                </ul>
            </nav>
        </header>
    )
}