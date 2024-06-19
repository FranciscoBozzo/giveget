import { Link, useRoutes } from 'react-router-dom';
import Logo from '../components/Logo';
import './Header.css'
import BurgerButton from '../components/BurgerButton';
import Dropdown from '../components/Dropdown';
import useLang from '../effects/useLang';


const getTexts = (lang) => {
    const map = {
        es: {
            products: 'Productos',
            about: 'Acerca de nosotros',
            foryou: 'Para ti',
            contact: 'Contactanos',
            login: 'Iniciar Sesión',
            download: 'Descargar Aplicación',
            lang: 'EN',

        },
        en: {
            products: 'Products',
            about: 'About us',
            foryou: 'For you',
            contact: 'Contact us',
            login: 'Log in',
            download: 'Download App',
            lang: 'ES',
        }
    }

    return map[lang];
}

export default function Header({theme}){
    const lang = useLang();
    const copy = getTexts(lang)

    let queryLang = lang == 'es' ? '?lang=es' : ''

    const links = [
        { url:'/products' + queryLang, name:copy.products},
        { url:'/about' + queryLang, name:copy.about},
        { url:'/for-you' + queryLang, name:copy.foryou},
        { url:'/contact-us' + queryLang, name:copy.contact},
    ];

    const actions = [
        { url:'https://secure.giveandget.io/', name:copy.login },
        { url:'/downloads', name:copy.download, className:'button gradient-button'},
        { url: lang == 'en' ? '?lang=es' : '' , name:copy.lang }
    ]

    return (
        <header className={"header " + "header--"+theme + " d-flex justify-content-between gap-600 align-items-center"}>
            <Logo theme={theme}></Logo>
            
            <nav className='header__nav | font-nav'>
                <ul className='nav__links' aria-label="navigation" role="list">
                    {
                        links.map((link, key) => {
                            return (
                            <li className="nav__link fw-medium " key={key}>
                                <Link to={link.url}>{link.name}</Link>
                            </li>)
                        })
                    }
                </ul>
            </nav>

            <nav className="header__actions | fw-medium font-nav"> 
                <ul className='actions__list' aria-label="actions" role="list">
                    {
                        actions.map((link, key) => {
                            return (
                            <li className="action__item" key={key}>
                                <Link className={link.className ? link.className : ""} to={link.url}>{link.name}</Link>
                            </li>)
                        })
                    }
                </ul>
            </nav>

            <Dropdown
                closable={true}
                theme={theme}
                header={Logo}
                trigger={BurgerButton}
                items={ links.map( (link) => {
                    return(<Link to={link.url}>{link.name}</Link>)
                }) }
            ></Dropdown>
            
        </header>
    )
}