import { Link } from 'react-router-dom'
import GiveGetLogoColor from '../assets/images/logos/GiveAndGet_Logo_Color.svg'
import GiveGetLogoBlanco from '../assets/images/logos/GiveAndGet_Logo_Blanco.svg'

import './Logo.css'

export default function Logo({theme='color'}){
    
    const logoSrc = theme == 'color' ? GiveGetLogoColor : GiveGetLogoBlanco;

    return (
        <div className="logo__wrapper">
             <Link to="/">
                <img className="logo_giveandget" src={logoSrc} alt="logo give&get" />
            </Link>
        </div>
       
    )
}