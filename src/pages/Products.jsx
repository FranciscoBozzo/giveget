import Banner from "../components/Banner";
import IconItem from "../components/IconItem";
import Article from "../components/Article";
import DebitCard from "../components/DebitCard";
import GradientButton from "../components/GradientButton";

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

import colorCard from '../assets/images/products/05.Fees/colorCard.png'
import lightCard from '../assets/images/products/05.Fees/lightCard.png'

import './Products.css';
import { useSearchParams } from "react-router-dom";

const getTexts = ( lang ) => {
    return {
        es: {

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
            personalCard_1_5:'Wire transfer Fees (incoming - outgoing)',

            businessCard_2_1:'Business Fees',
            businessCard_2_2:'Maintenance Fees',
            businessCard_2_3:'Debit Card Fees',
            businessCard_2_4:'Transaction Fees',
            businessCard_2_5:'Wire transfer Fees (incoming - outgoing)',
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
                description:"enroll now"
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
            <div className="products__header header--default">
                {header}
            </div>

            <section className="products__hero">
                <Banner imageSrc={productsBanner} content={ () => "" }></Banner>                
                
                <div className="products__list">
                    { items.filter( (_,i) => i <= 2).map((item, key) => <IconItem key={key} {...item} />)}      
                </div>

                <div className="products__list">
                    { items.filter( (_,i) => i > 2).map((item, key) => <IconItem key={key} {...item} />)}
                </div>
            </section>
            
            <div className="products__body container">
                <section className="products__personal">
                    <Article {...articles[0]}>
                        <div className="d-flex justify-content-center">
                            <a className="gradient-button" href="https://secure.giveandget.io/register"> Enroll Now</a>
                        </div>
                    </Article>
                </section>

                <section className="products__business">
                    <Article {...articles[1]}>
                        {
                            businessItems.map( (item, key) => {
                                return (<IconItem key={key} {...item}></IconItem>)
                            })
                        }
                    </Article>
                    
                </section>

                <section className="products__debit-card">
                    <div className="article__title text-center">
                        {articles[2].title}
                    </div>

                    <div className="debit-card__wrapper">
                        <div className="debit-card__image">
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

                <section className="products__fees">
                    <div className="products__fees__cards">
                        <div className="product__fees__card">
                            <DebitCard content={ personalCardProps } theme="light"></DebitCard>
                        </div>
                        <div className="product__fees__card">
                            <DebitCard content={ businessCardProps } theme="color"></DebitCard>
                        </div>
                    </div>
                    <div className="d-flex justify-content-center">
                        <a href="/fees" className="text-center gradient-button">Fees Detail</a>
                    </div>
                </section>
            </div>

            <div className="products__footer">
                {footer}
            </div>
            
        </div>
    )
}