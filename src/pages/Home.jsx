import ContactBox from "../components/ContactBox";
import Banner from "../components/Banner";

import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';

import "./Home.css";

import banner1 from '../assets/images/home/home_Banner1.png';
import banner2 from '../assets/images/home/home_Banner2.png';
import banner3 from '../assets/images/home/home_Banner3.png';

import fanFestLogo from '../assets/images/logos/ForYou_FanFest.png';
import giveLogo from '../assets/images/logos/partial_give.svg';
import getLogo from '../assets/images/logos/partial_get.svg';

import { useSearchParams } from "react-router-dom";
import useLang from "../effects/useLang";

const getTexts = ( lang ) =>  {
    const map = {
        es: {
            banner1_1 : 'Obtén una cuenta en dólares ',
            banner1_2 : 'en Estados Unidos',
            banner1_3 : '¡online!',

            banner2_1 : 'Dale una oportunidad a la Prosperidad Global',
            banner2_2 : 'Obtén tu cuenta internacional en dólares, tarjeta de débito y préstamo.',

            banner3_1 : '¡Aprovecha para revivir los momentos más legendarios de Diego A. Maradona!',
            banner3_2 : 'Junio 2024 - MIAMI. Compra tus boletos ahora!'

        },
        en : {
            banner1_1 : 'Get an account in dollars ',
            banner1_2 : 'in United States',
            banner1_3 : 'Online',

            banner2_1 : 'Yourself a Gateway to Global Prosperity',
            banner2_2 : 'Your International Dollar Account, Loans and debit card.',

            banner3_1 : 'Take the chance to recreate Maradona’s most legendary moments!',
            banner3_2 : 'June 2024 - MIAMI'
        }
    }
    return map[lang];
}


const renderBanners = ( copy ) => {
    
    return [
        {
            imageSrc: banner1,
            content:() =>
            <>
                <div className="nammer_item">
                    <div className="banner__text title">
                        { copy.banner1_1 }<span className="fw-bold">{copy.banner1_2}<br/>{copy.banner1_3}</span>
                    </div>
                </div>
            </>
        },
        {
            imageSrc: banner2,
            content:() =>
            <>
                <div className="banner__item">
                    <div className="banner__logo">
                        <img src={giveLogo} alt="" />
                    </div>
                    <p className="banner__text title">
                        <span className="fw-bold">{copy.banner2_1}</span>
                    </p>
                </div>
                <div className="banner__item">
                    <div className="banner__logo">
                        <img src={getLogo} alt="" />
                    </div>
                    <p className="banner__text title">
                        <span className="fw-bold">{copy.banner2_2}</span>
                    </p>
                </div>
            </>
        },
        {
            imageSrc: banner3,
            content:() => 
            <>
                <div className="banner__item">
                    <div className="banner__logo">
                        <img src={fanFestLogo} alt="" />
                    </div>
                    <div className="banner__text title">
                        <span className="fw-bold">{copy.banner3_1}</span>
                    </div>
                    <div className="banner__text detail">
                        {copy.banner3_2}
                    </div>
                </div>
            </>
        },
    ]
}

export default function Home({footer, header}){
    const lang = useLang()
    const copy = getTexts(lang);

    const banners = renderBanners(copy)
    
    return (
        <div className="home">
            <div className="home__header padding-block-500 padding-inline-500">
                {header}
            </div>

            <div className="home__body container">

                <section className="home__hero">
                    <Fade autoplay={true} duration={5000} transitionDuration={200}>
                        { banners.map((banner, key) => <Banner className={key + 1} key={key} {...banner} />) }
                    </Fade>
                </section>
                
                <section className="home__contact">
                    <ContactBox lang={lang}/>
                </section>
            </div>

            <div className="home__footer">
                {footer}
            </div>
        </div>
    )
}