import { Link, useRoutes } from 'react-router-dom';
import Logo from '../components/Logo';
import './Header.css'
import BurgerButton from '../components/BurgerButton';
import Dropdown from '../components/Dropdown';


const getTexts = (lang) => {
    const map = {
        es: {
            products: 'Productos',
            about: 'About us',
            foryou: 'Para ti',
            contact: 'Contactanos',
            login: 'Log in',
            download: 'Descarga la App',
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

export default function Header({theme, lang = 'en'}){
    const copy = getTexts(lang)

    const links = [
        { url:'/products', name:copy.products},
        { url:'/about', name:copy.about},
        { url:'/for-you', name:copy.foryou},
        { url:'/contact-us', name:copy.contact},
         
    ];

    const actions = [
        { url:'https://secure.giveandget.io/', name:copy.login },
        { url:'/downloads', name:copy.download, className:'gradient-button'},
        { url:'?lang=es', name:copy.lang }
    ]


    return (
        <header className="header">
            <Logo theme={theme}></Logo>
            
            <nav className='header__nav'>
                <ul className='nav__links'>
                    {
                        links.map((link, key) => {
                            console.log(link)
                            return (
                            <li className="nav__link" key={key}>
                                <Link to={link.url}>{link.name}</Link>
                            </li>)
                        })
                    }
                </ul>
            </nav>

            <nav className="header__actions"> 
                <ul className='actions__list'>
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