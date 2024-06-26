
import Card from "../components/Card"
import Article from '../components/Article'
import GradientButton from '../components/GradientButton'
import IconItem from "../components/IconItem";

import './ForYou.css';

//Community
import giveGetCommunityLogo from '../assets/images/for_you/inicio/ForYou_Giveandgetcommunity.png'

//Characteristics
import ForYou_DemocratizeBanking from '../assets/images/for_you/caracteristicas/ForYou_DemocratizeBanking.svg'
import ForYou_EasyAccess from '../assets/images/for_you/caracteristicas/ForYou_EasyAccess.svg'
import ForYou_BuildSavings from '../assets/images/for_you/caracteristicas/ForYou_BuildSavings.svg'
import ForYou_DigitalAssets from '../assets/images/for_you/caracteristicas/ForYou_DigitalAssets.svg'
import ForYou_LocalYInternational from '../assets/images/for_you/caracteristicas/ForYou_LocalYInternational.svg'
import ForYou_Payment from '../assets/images/for_you/caracteristicas/ForYou_Payment.svg'
import ForYou_CharacteristicsHero from '../assets/images/for_you/caracteristicas/ForYou_CharacteristicsHero.png'

//Rings
import ForYou_BetterWorld from '../assets/images/for_you/rings/ForYou_BetterWorld.png'
import ForYou_Providing from '../assets/images/for_you/rings/ForYou_Providing.png'
import ForYou_RiseAgainst from '../assets/images/for_you/rings/ForYou_RiseAgainst.png'

//Rewards
import ForYou_RewardsTangoDios from '../assets/images/for_you/rewards/ForYou_TangoDios.png'
import ForYou_FanFest from '../assets/images/logos/ForYou_FanFest.png'
import ForYou_SaveOnFees from '../assets/images/for_you/rewards/ForYou_Rewards.png'

//Benefits
import ForYou_Liquidity from '../assets/images/for_you/benefits/ForYou_24_7.png'
import ForYou_Accesible from '../assets/images/for_you/benefits/ForYou_Accesible.png'
import ForYou_Compliance from '../assets/images/for_you/benefits/ForYou_Compliance.png'
import ForYou_Global from '../assets/images/for_you/benefits/ForYou_Global.png'
import ForYou_Transparency from '../assets/images/for_you/benefits/ForYou_Transparency.png'
import ForYou_HassleFree from '../assets/images/for_you/benefits/ForYou_HassleFree.png'
import { Link, useSearchParams } from "react-router-dom";

const getTexts = ( lang ) => {
    const map = {
        es: {
            community_alt: "Comunidad de Give & Get",

            char_1_1: 'Democratización Bancaria',
            char_2_1: 'Acceso fácil a clientes internacionales',
            char_3_1: 'Construcción de ahorros y registro crediticio',
            char_4_1: 'Activos digitales',
            char_5_1: 'Transferencias bancarias locales e internacionales',
            char_6_1: 'Pasarelas de pago - tarjeta de débito',

            rings_1_1: 'Un mundo mejor. Facilitamos el progreso para todos a través de la seguridad económica proporcionada por una cuenta de ahorros en dólares.',
            rings_2_1: 'Alzarse contra la desigualdad financiera para ayudar al segmento de población olvidado en necesidad.',
            rings_3_1: 'Ofrecer oportunidades para todos, sin importar de dónde provengan. Proteja sus ahorros y evite perder valor debido a monedas débiles.',

            tango_1_1: 'RECOMPENSAS',
            tango_1_2: "Give & Get te desafía con grandes premios para replicar los momentos más legendarios de Diego A. Maradona.",
            tango_1_3: "Desde el \"Gol del Siglo\", la \"Mano de Dios\", hasta \"Los Palos\", puedes revivir su historia y tener la oportunidad de ganar premios en efectivo.",
            tango_1_4: "Miami - junio de 2024",

            fanfest_alt: "Maradona Fan Fest logo",

            cta_1_1: 'Conocer más',

            referrals_1_3: "PREMIOS",
            referrals_1_1: "Ahorre en tarifas con nuestro programa de referencia",
            referrals_1_2: "¡Refiera a un amigo y disfrute de bonificaciones en los costos de mantenimiento de su cuenta por cada referencia exitosa!",

            benefits_1_1: 'Accesible',
            benefits_1_2: 'Todos pueden obtener fácilmente la libertad financiera al democratizar el acceso al modelo financiero estadounidense.',
            
            benefits_2_1: 'Cumplimiento',
            benefits_2_2: 'La documentación digital y la información están almacenadas en un solo lugar que se puede acceder fácilmente para una revisión rápida.',
            
            benefits_3_1: 'Liquidez 24/7',
            benefits_3_2: 'Proporcionamos control sobre su liquidez ya que sus fondos se guardan en el sistema bancario de EE.UU.',
            
            benefits_4_1: 'Transparencia',
            benefits_4_2: 'La plataforma tecnológica tiene una transparencia superior y no puede ser alterada.',
            
            benefits_5_1: 'Sin complicaciones',
            benefits_5_2: 'Reemplaza gran parte de la burocracia en el entorno bancario tradicional eliminando obstáculos con automatización precisa que hace el proceso más rápido.',
            
            benefits_6_1: 'Global',
            benefits_6_2: 'Cuentas internacionales en múltiples monedas con menos barreras y más seguridad en las transacciones.'
        },
        en: {
            community_alt: "give & get community",

            char_1_1: 'Democratize Banking',
            char_2_1: 'Easy access to international clients',
            char_3_1: 'Build savings and credit record',
            char_4_1: 'Digital assets',
            char_5_1: 'Local & international wire transfers',
            char_6_1: 'Payment gateways - debit card',

            rings_1_1: 'A better world. We enable progress for everyone through the economic security provided by a savings account in dollars.',
            rings_2_1: 'Rise against financial inequality to aid the forgotten population segment in need.',
            rings_3_1: 'Providing opportunities for all, regardless of where they come from. Protect your savings and avoid losing value because of weak currencies.',

            tango_1_1: 'rewards',
            tango_1_2: "Give & Get challenges you with great prizes to replicate Maradona\'s most legendary moments.",
            tango_1_3: "From the \"Goal of the Century\", the \"Hand of God\" to \"The Posts\", you can relive my story and have the chance to win cash prizes.",
            tango_1_4: "Miami - June 2024",

            fanfest_alt: "Maradona Fan Fest logo",

            cta_1_1: 'Learn more',

            referrals_1_3: "REWARDS",
            referrals_1_1: "Save on Fees with Our Referral Program",
            referrals_1_2: "Refer a friend and enjoy bonuses on your account maintenance costs for every successful referral!",

            benefits_1_1: 'Accessible',
            benefits_1_2: 'Everyone can effortlessly obtain financial freedom by democratizing access to the American financial model.',
            benefits_2_1: 'Compliance',
            benefits_2_2: 'Digital documentation & info it´s all stored in a single place which can easily be accessed for fast review.',
            benefits_3_1: '24/7 Liquidity',
            benefits_3_2: 'We provide control over your liquidity since your funds are saved in the USA Banking system.',
            benefits_4_1: 'Transparency',
            benefits_4_2: 'The technological platform has superior transparency and cannot be altered.',
            benefits_5_1: 'Hassle-Free',
            benefits_5_2: 'Replaces many of the bureaucracy in traditional banking setting down hurdles with precise automation making the process faster.',
            benefits_6_1: 'Global',
            benefits_6_2: 'International accounts in multicurrency with less barriers and more security of transactions.'
        }
    }

    return map[lang];
}

export default function ForYou({header, footer}){
    const [searchParams, setSearchParams] = useSearchParams();
    let lang = searchParams.get('lang');

    if(!lang) {
        lang = 'en'
        setSearchParams({ lang: 'en' });
    }
    const copy = getTexts(lang);
    const giveAndGetCommunity = {
        image: {
            src: giveGetCommunityLogo,
            alt: copy.community_alt
        }
    }
    const characteristics = [
        { icon: ForYou_DemocratizeBanking, title: copy.char_1_1 },
        { icon: ForYou_EasyAccess, title: copy.char_2_1 },
        { icon: ForYou_BuildSavings, title: copy.char_3_1 },
        { icon: ForYou_DigitalAssets, title: copy.char_4_1},
        { icon: ForYou_LocalYInternational, title: copy.char_5_1 },
        { icon: ForYou_Payment, title: copy.char_6_1 }
    ]
    const rings = [
        {icon: ForYou_BetterWorld, description: copy.rings_1_1},
        {icon: ForYou_RiseAgainst, description: copy.rings_2_1},
        {icon: ForYou_Providing, description: copy.rings_3_1},
    ]
    const tangoChallenge = {
        subtitle: copy.tango_1_1,
        title: copy.tango_1_2,
        text: copy.tango_1_3,
        footer: copy.tango_1_4
    }
    const fanFest = {
        image: {
            src: ForYou_FanFest,
            alt: copy.fanfest_alt
        }
    }
    const cta = {
        buttonText: copy.cta_1_1,
        url: 'https://tangod10s.com/'
    }
    const referrals = {
        image : {
            src: ForYou_SaveOnFees
        },
        subtitle: copy.referrals_1_3,
        title: copy.referrals_1_1,
        text: copy.referrals_1_2
    }
    const benefits = [
        {
            image : { src: ForYou_Accesible },
            title: copy.benefits_1_1,
            text: copy.benefits_1_2
        },{
            image : { src: ForYou_Compliance },
            title: copy.benefits_2_1,
            text: copy.benefits_2_2
        },{
            image : { src: ForYou_Liquidity },
            title: copy.benefits_3_1,
            text: copy.benefits_3_2
        },{
            image : { src: ForYou_Transparency },
            title: copy.benefits_4_1,
            text: copy.benefits_4_2
        },{
            image : { src: ForYou_HassleFree },
            title: copy.benefits_5_1,
            text: copy.benefits_5_2
        },{
            image : { src: ForYou_Global },
            title: copy.benefits_6_1,
            text: copy.benefits_6_2
        } 
    ];

    return (
        <div className="for-you">
            <div className="for-you__header | padding-block-500 padding-inline-500">
                {header}
            </div>

            <section className="for-you__hero">
                <img className="community__logo" src={giveAndGetCommunity.image.src} alt={giveAndGetCommunity.image.alt}/>
            </section>
                
            <div className="for-you__body">
                <div className="for-you__theme--dark">
                    
                    <section className="for-you__characteristics | container-flex padding-block-900 margin-block-900">
                        <ul className="characteristics__list" role="list">
                            {
                                characteristics.filter((_,idx) => idx < 3 ).map( (item, key) => {
                                    return (
                                        <li key={key} className="characteristics__item">
                                            <IconItem {...item}></IconItem>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                        <ul className="characteristics__list" role="list">
                            {
                                characteristics.filter((_,idx) => idx >= 3 ).map( (item, key) => {
                                    return (
                                        <li key={key} className="characteristics__item">
                                            <IconItem {...item}></IconItem>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                        <div className="characteristics__hero | margin-block-600">
                            <img  className="characteristics__hero__image " src={ForYou_CharacteristicsHero} alt="" />
                        </div>
                    </section>

                    <section className="for-you__rings | container-flex padding-block-900 margin-block-600">
                        <div className="rings__list">
                        {
                            rings.map( (ring, key) => {
                                return (
                                <div key={key} className="ring">
                                    <img className="ring__icon" src={ring.icon} alt=""/>
                                    <p className="ring__description">
                                        {ring.description}
                                    </p>
                                </div>)
                            })
                        }
                        </div>
                    </section>
                </div>
                
                <div className="for-you__theme--light | rounded-top-800 pt-800">
                    <section className="for-you__rewards">
                        
                        <div className="rewards__tango pb-600">

                            <Article
                                image={{source:ForYou_RewardsTangoDios}}
                                subtitle={tangoChallenge.subtitle}
                                title={tangoChallenge.title}
                                text={tangoChallenge.text}
                                footer={tangoChallenge.footer}
                            >
                                <div className="tango__cta">
                                    <div className="fan-fest__logo">
                                        <img src={fanFest.image.src} alt={fanFest.alt} />
                                    </div>
                                    <div className="fan-fest__button">
                                        <Link to={cta.url} className="button gradient-primary">{cta.buttonText}</Link>
                                    </div>
                                </div>
                            </Article>

                            
                        </div>

                        <div className="referrals">
                            <Card
                                image={referrals.image.src}
                                subtitle={referrals.subtitle}
                                title={referrals.title}
                                text={referrals.text}
                            />
                        </div>

                    </section>

                    <section className="for-you__benefits | container-flex">
                        <div className="benefits__list__wrapper">
                            <ul className="benefits__list">
                                {
                                    benefits.map((card, key) => 
                                        <Card
                                            key={key}
                                            image={card.image.src}
                                            title={card.title}
                                            text={card.text}
                                        />)
                                }
                             </ul>
                        </div>
                    </section>
                </div>

            </div>

            <div className="for-you__footer">
                {footer}
            </div>
        </div>
    )
}