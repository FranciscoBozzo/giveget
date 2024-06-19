import Banner from "../components/Banner";
import IconItem from "../components/IconItem";
import Article from "../components/Article";
import DebitCard from "../components/DebitCard";

import productsBanner from '../assets/images/products/01.Inicio/Products_Banner.png'
import productsPersonal from '../assets/images/products/02.Personal/Products_Imagen1.png'

import iconAppBased from '../assets/images/products/01.Inicio/Products_Appbased.svg'
import iconFundedDebit from '../assets/images/products/01.Inicio/Products_FundedDebitCard.svg'
import iconMulticurrency from '../assets/images/products/01.Inicio/Products_MultiCurrencyWorldwide.svg'
import iconSendReceive from '../assets/images/products/01.Inicio/Products_Sendandreceive.svg'
import iconSimpleTransaction from '../assets/images/products/01.Inicio/Products_SimpleTransactions.svg'
import iconTransfers from '../assets/images/products/01.Inicio/Products_Transfers.svg'

import iconPowerOfDollar from '../assets/images/products/03.Business/icon_powerOfDollar.svg'
import iconGoodbyeFluctuations from '../assets/images/products/03.Business/icon_goodbyeFluctuations.svg'
import iconRegulatedExcellence from '../assets/images/products/03.Business/icon_regulatedExcellence.svg'

import internationalDebitCard from '../assets/images/products/04.International_debit_card/Products_InternationalDebitCard.jpg'

import iconChargeUse from '../assets/images/products/04.International_debit_card/icon_Charge_use.svg'
import iconDebitMulticurrency from '../assets/images/products/04.International_debit_card/icon_Multi_currency.svg'
import iconSecurity from '../assets/images/products/04.International_debit_card/icon_Scurity.svg'
import iconTokenized from '../assets/images/products/04.International_debit_card/icon_Tokenized.svg'

import './Products.css';
import { useSearchParams } from "react-router-dom";

const getTexts = ( lang ) => {
    return {
        es: {
            item_1_1: 'Tarjeta de Débito Financiada',
            item_2_1: 'Send and receive payments easily',
            item_2_2: 'Envía y recibe pagos fácilmente - desde cualquier parte del mundo',
            item_3_1: 'Transferencias: Routing, ACH, Swift & BIC',
            item_4_1: 'Transacciones simples en solo unos clics',
            item_5_1: 'Multi-divisas: Usa tu tarjeta en todo el mundo',
            item_5_2: 'Security First - Our card has all security features within VISA platform',
            item_6_1: 'Tecnología basada en aplicaciones: para transacciones en iOS y Android',
            item_6_2: 'for IOS & Android transactions',

            article_1_1: "PERSONAL",
            article_1_2: "¡Revoluciona tu viaje financiero con Give & Get!",
            article_1_3: "¡Atención, individuos y empresas en busca de empoderamiento financiero! ¿Estás cansado de estar mal bancarizado o mal atendido por instituciones financieras tradicionales? ¡Tenemos una solución innovadora para ti!",
            article_1_4: "Presentamos una plataforma revolucionaria que comprende tus desafíos y abre puertas a posibilidades financieras.",
            article_1_5: "",

            article_2_1:  "NEGOCIOS",
            article_2_2:  "¿Por qué Acceso Fintech Ahora?",

            article_3_1: "Tarjeta de Débito Internacional",

            business_1_1: 'Desbloquea el Poder del Dólar:',
            business_1_2: 'Asegura tu dinero en una moneda estable, libre de la devaluación que afecta muchas monedas latinoamericanas.',

            business_2_1: 'Di Adiós a las Fluctuaciones:',
            business_2_2: 'A diferencia de las monedas digitales, el dólar se mantiene estable, proporcionándote una base financiera confiable.',

            business_3_1: 'Excelencia Regulada:',
            business_3_2: 'Confía en una plataforma que prioriza el cumplimiento y la regulación, asegurando tu seguridad financiera con nuestro registro de MSB regulado por FINCEN.',

            debitCard_1_1: 'Carga y usa tu tarjeta fácilmente',
            debitCard_1_2: 'en todas partes',

            debitCard_2_1: 'Tarjeta virtual tokenizada',
            debitCard_2_2: 'accede a tu tarjeta en cualquier monedero',

            debitCard_3_1: 'Multi-divisas',
            debitCard_3_2: 'usa tu tarjeta en todo el mundo',

            debitCard_4_1: 'Seguridad Primero',
            debitCard_4_2: 'nuestra tarjeta cuenta con todas las características de seguridad dentro de la plataforma VISA.',

            personalCard_1_1:'Tarifas Personales',
            personalCard_1_2:'Tarifas de Mantenimiento',
            personalCard_1_3:'Tarifas de Tarjeta de Débito',
            personalCard_1_4:'Tarifas de Transacción',
            personalCard_1_5:'Tarifas de Transferencia Bancaria',

            businessCard_2_1:'Tarifas de Negocios',
            businessCard_2_2:'Tarifas de Mantenimiento',
            businessCard_2_3:'Tarifas de Tarjeta de Débito',
            businessCard_2_4:'Tarifas de Transacción',
            businessCard_2_5:'Tarifas de Transferencia Bancaria',

            fees_detail:'Detalle de Tarifas'
        },
        en: {
            item_1_1: 'Funded Debit Card',
            item_2_1: 'Send and receive payments easily',
            item_2_2: 'From anywhere in the world',
            item_3_1: 'Transfers: Routing, ACH, SWIFT & BIC',
            item_4_1: 'Simple transactions in just a few clicks!',
            item_5_1: 'Multy currency - Use your card worldwide',
            item_5_2: 'Security First - Our card has all security features within VISA platform',
            item_6_1: 'App Based technology',
            item_6_2: 'for IOS & Android transactions',

            article_1_1: "PERSONAL",
            article_1_2: "Revolutionize your Financial Journey with Give & Get!",
            article_1_3: "Attention, individuals and businesses seeking financial empowerment! Are you tired of being underbanked or underserved by traditional financial institutions? We have a game-changing solution for you!",
            article_1_4: "Introducing a groundbreaking platform that understands your challenges and opens doors to financial possibilities",
            article_1_5: "Enroll now",

            article_2_1:  "BUSINESS",
            article_2_2:  "Why Fintech Access Now?",

            article_3_1: "International Debit Card",

            business_1_1: 'Unlock the Power of the Dollar:',
            business_1_2: 'Secure your money in a stable currency, free from the devaluation plaguing many Latin American currencies.',

            business_2_1: 'Say Goodbye to Fluctuations:',
            business_2_2: 'Unlike digital currencies, the dollar remains steady, providing you with a reliable financial foundation.',

            business_3_1: 'Regulated Excellence:',
            business_3_2: 'Unlike digital currencies, the dollar remains steady, providing you with a reliable financial foundation.',

            debitCard_1_1: 'Charge & use your card easily',
            debitCard_1_2: 'Everywhere',

            debitCard_2_1: 'Tokenized virtual card',
            debitCard_2_2: 'Access your card in any Wallet',

            debitCard_3_1: 'Multi-Currency',
            debitCard_3_2: 'Use your card worldwide',

            debitCard_4_1: 'Security First',
            debitCard_4_2: 'Our card has all security features within VISA platform.',

            personalCard_1_1:'Personal Fees',
            personalCard_1_2:'Maintenance Fees',
            personalCard_1_3:'Debit Card Fees',
            personalCard_1_4:'Transaction Fees',
            personalCard_1_5:'Wire transfer Fees',

            businessCard_2_1:'Business Fees',
            businessCard_2_2:'Maintenance Fees',
            businessCard_2_3:'Debit Card Fees',
            businessCard_2_4:'Transaction Fees',
            businessCard_2_5:'Wire transfer Fees',

            fees_detail: 'Fees Detail'
        }
    }[lang];
}

export default function Products({header, footer}){
    const [searchParams, setSearchParams] = useSearchParams();
    
    let lang = searchParams.get('lang');
  
    if(!lang) {
        lang = 'en'
        setSearchParams({ lang: 'en' });
    }

    const copy = getTexts(lang);

    const items = [
        { icon: iconFundedDebit, title: copy.item_1_1 },
        { icon: iconSendReceive, title: copy.item_2_1, description: copy.item_2_2 },
        { icon: iconTransfers, title: copy.item_3_1},
        { icon: iconSimpleTransaction, title: copy.item_4_1},
        { icon: iconMulticurrency, title: copy.item_5_1, description: copy.item_5_2},
        { icon: iconAppBased, title: copy.item_6_1, description: copy.item_6_2},
    ];

    const articles = [
        {
            subtitle : copy.article_1_1,
            title : copy.article_1_2,
            text : copy.article_1_3,
            footer : copy.article_1_4,
            image : {
                source : productsPersonal,
                description:copy.article_1_5
            },
        },
        {
            subtitle : copy.article_2_1,
            title : copy.article_2_2,
        },
        {
            title : copy.article_3_1,
            image: {
                source: internationalDebitCard,
                description:"international debit card"
            }
        },
    ]

    const businessItems = [
        {icon: iconPowerOfDollar, title: copy.business_1_1, description: copy.business_1_2 },
        {icon: iconGoodbyeFluctuations, title: copy.business_2_1, description: copy.business_2_2 },
        {icon: iconRegulatedExcellence, title: copy.business_3_1, description: copy.business_3_2 }
    ]

    const debitCardItems = [
        {icon: iconChargeUse, title: copy.debitCard_1_1 , description: copy.debitCard_1_2 },
        {icon: iconTokenized, title: copy.debitCard_2_1, description: copy.debitCard_2_2 },
        {icon: iconDebitMulticurrency, title: copy.debitCard_3_1, description: copy.debitCard_3_2 },
        {icon: iconSecurity, title: copy.debitCard_4_1, description: copy.debitCard_4_2 }
    ]

    const personalCardProps = {
        title: copy.personalCard_1_1,
        items: [
            copy.personalCard_1_2,
            copy.personalCard_1_3,
            copy.personalCard_1_4,
            copy.personalCard_1_5            
        ]
    }

    const businessCardProps = {
        title: copy.businessCard_2_1,
        items: [
            copy.businessCard_2_2,
            copy.businessCard_2_3,
            copy.businessCard_2_4,
            copy.businessCard_2_5
        ]
    }

    return (
        <div className="products">
            <div className="products__header | padding-block-500 padding-inline-500">
                {header}
            </div>

            <section className="products__hero | container-flex padding-block-700">
                <Banner imageSrc={productsBanner} content={ () => "" }></Banner>                
                
                <div className="products__list">
                    { items.filter( (_,i) => i <= 2).map((item, key) => <IconItem key={key} {...item} />)}      
                </div>

                <div className="products__list">
                    { items.filter( (_,i) => i > 2).map((item, key) => <IconItem key={key} {...item} />)}
                </div>
            </section>
            
            <div className="products__body">
                <section className="products__personal | container padding-block-800">
                    <Article {...articles[0]}>
                        <div className="d-flex justify-content-center  padding-block-500">
                            <a className="button gradient-primary" href="https://secure.giveandget.io/register"> Enroll Now</a>
                        </div>
                    </Article>
                </section>

                <section className="products__business | container padding-block-800">
                    <Article {...articles[1]}>
                        {
                            businessItems.map( (item, key) => {
                                return (<IconItem key={key} {...item}></IconItem>)
                            })
                        }
                    </Article>
                    
                </section>

                <section className="products__debit-card | container-flex padding-block-800">
                    <div className="fs-800 fw-bold mb-500 text-center">
                        {articles[2].title}
                    </div>

                    <div className="debit-card__wrapper">
                        <div className="debit-card__image | mb-400">
                            <img src={articles[2].image.source} alt={articles[2].image.description} />
                        </div>
                    
                        <div className="list_items">
                            {   
                                debitCardItems.filter( (_,i) => i<2).map( (item, key) => {
                                    return (<IconItem key={key} {...item}></IconItem>)
                                })
                            }
                        </div>
                        <div className="list_items">
                            {   
                                debitCardItems.filter( (_,i) => i>=2).map( (item, key) => {
                                    return (<IconItem key={key} {...item}></IconItem>)
                                })
                            }
                        </div>
                    </div>

                </section>

                <section className="products__fees | container-flex padding-block-800">
                    <div className="products__fees__cards | d-flex justify-content-center align-items-center gap-300 pb-500">
                        <DebitCard content={ personalCardProps } theme="light"></DebitCard>
                        <DebitCard content={ businessCardProps } theme="color"></DebitCard>
                    </div>
                    <div className="d-flex justify-content-center">
                        <a href="/fees" className="button gradient-primary">{copy.fees_detail}</a>
                    </div>
                </section>
            </div>

            <div className="products__footer">
                {footer}
            </div>
            
        </div>
    )
}