
import Card from "../components/Card"
import Article from '../components/Article'

import './About.css';

//INICIO
import TextoInicio from '../assets/images/about_us/AboutUs_TextoInicio.png'

//SERVICES
import OurServices from '../assets/images/about_us/AboutUs_OurServices.png'

//MISSION
import Mission from '../assets/images/about_us/AboutUs_Mission.jpg'

//VISION
import Vision from '../assets/images/about_us/AboutUs_Vision.png'

//ABOUT
import AboutUs from '../assets/images/about_us/AboutUs_AboutUs.png'

//BENEFITS
import BusinessAwareness from '../assets/images/about_us/AboutUs_BusinessAwareness.png'
import Dreams from '../assets/images/about_us/AboutUs_Dreams.png'
import FinancialInclusion from '../assets/images/about_us/AboutUs_FinancialInclusion.png'
import Rewards from '../assets/images/about_us/AboutUs_Rewards.png'
import { useSearchParams } from "react-router-dom";

const getTexts = (lang) => {
    const map = {
        es : {

        },
        en: {
            focus_1_1: "We are a fintech that is closer to the customer.",
            focus_1_2: "We are focused on providing international financial services to our Personal or Business clients with a wide range of solutions that allow a flexible, simple and seamless way to control your finances.",
            focus_1_3: "Get your personal account in the USA and start saving dollars and building your credit score.",

            services_1_1: 'our services',
            services_1_2: "In this era of limitless possibilities, Give & Get is your partner in achieving financial success.",
            services_1_3: "Start today, and let your money work for you in a currency that strengthens your financial foundation.",
            services_1_4: "Together, we pave the way for you to dream big and turn those dreams into tangible realities by granting access to a bank account and loans.",

            mission_1_1: 'mission',
            mission_1_2: "Redefine financial empowerment",
            mission_1_3:"Our mission at Give & Get is to redefine financial empowerment through innovative technology and strategic partnerships. We are committed to delivering a user-centric platform that empowers our customers with precise control over their finances, ensuring security and accessibility to international accounts in strong currencies.",
            mission_1_4: "With a focus on servicing various segments we are committed to attend the under bank and undeserved. Through these efforts, we strive to bridge the gap, fostering financial inclusion and prosperity for all.",
           
            vision_1_1:'vision',
            vision_1_2: "We envision a future where everyone can effortlessly control and optimize their financial freedom by democratizing access to the American financial model, ensuring the opportunity to embrace security and growth by empowering individuals and businesses to navigate their financial landscape with absolute precision and confidence.",
            
            about_1_1: 'about us',
            about_1_2: "Highly skilled financial professionals",
            about_1_3: "Our team comprises a group of highly skilled financial professionals with deep expertise in the Latin American market. We have established numerous partnerships with key financial service providers across the United States and throughout South America. In addition to our robust understanding of financial institutions, our team possesses extensive experience in international trade, real estate investments, and aircraft fractional ownership business models.",
            
            beliefs_1_1: 'Financial Inclusion',
            beliefs_1_2: 'We firmly believe that financial inclusion must work together with social inclusion.',
            beliefs_1_3: 'Business Awareness',
            beliefs_1_4: 'We believe that if there is business awareness, there is less dependence on the state.',
            beliefs_1_5: 'Dreams',
            beliefs_1_6: 'We believe that everyone should dream and we want to help fulfill those dreams.',
            beliefs_1_7: 'Rewards',
            beliefs_1_8: 'We believe that everyone should dream and we want to help fulfill those dreams.',
        }
    }
    return map[lang]
};


export default function About({header, footer}){
    const [searchParams, setSearchParams] = useSearchParams();
    
    let lang = searchParams.get('lang');
  
    if(!lang) {
        lang = 'en'
        setSearchParams({ lang: 'en' });
    }

    const copy = getTexts(lang);

    const focus = {
        image : { source: TextoInicio },
        title: copy.focus_1_1,
        text: [copy.focus_1_2, copy.focus_1_3]
    }
    const ourServices = {
        image : { source: OurServices },
        subtitle: copy.services_1_1,
        title: copy.services_1_2,
        text: [copy.services_1_3, copy.services_1_4]
    }
    const mission = {
        image : { source: Mission },
        subtitle: copy.mission_1_1,
        title: copy.mission_1_2,
        text: [copy.mission_1_3, copy.mission_1_4]
    }
    const vision = {
        image : { source: Vision },
        subtitle: copy.vision_1_1,
        text: copy.vision_1_2
    }
    const about_us = {
        image : { source: AboutUs },
        subtitle: copy.about_1_1,
        title: copy.about_1_2,
        text: copy.about_1_3
    }
    const beliefs = [
        {
            image : { source: FinancialInclusion },
            title: copy.beliefs_1_1,
            text: copy.beliefs_1_2
        },{
            image : { source: BusinessAwareness },
            title: copy.beliefs_1_3,
            text: copy.beliefs_1_4
        },{
            image : { source: Dreams },
            title: copy.beliefs_1_5,
            text: copy.beliefs_1_6
        },{
            image : { source: Rewards },
            title: copy.beliefs_1_7,
            text: copy.beliefs_1_8
        }
    ];

    return (
        <div className="about">
            <div className="about__header header--default">
                {header}
            </div>

            <section className="about__hero">
                <div className="title">
                    <p>{focus.title}</p>
                </div>
            </section>
            
            <div className="about__body container">

                <section className="about__focus">
                    <Article
                        image={focus.image}
                        subtitle={focus.subtitle}
                        title={focus.title}
                        text={focus.text}
                        footer={focus.footer}
                    />
                </section>

                <section className="about__services">
                    <Article
                        image={ourServices.image}
                        subtitle={ourServices.subtitle}
                        title={ourServices.title}
                        text={ourServices.text}
                        footer={ourServices.footer}
                    />
                </section>

                <section className="about__beliefs">
                    <div className="beliefs__list__wrapper">
                        <ul className="beliefs__list">
                            {
                                beliefs.map((card, key) => 
                                    <Card
                                        key={key}
                                        image={card.image.source}
                                        title={card.title}
                                        text={card.text}
                                    />)
                            }
                        </ul>
                    </div>
                </section>

                <section className="about__mission">
                    <Article
                        image={mission.image}
                        subtitle={mission.subtitle}
                        title={mission.title}
                        text={mission.text}
                        footer={mission.footer}
                    />
                </section>

                <section className="about__vision">
                    <Card
                        image={vision.image.source}
                        subtitle={vision.subtitle}
                        title={vision.title}
                        text={vision.text}
                    />
                </section>

                <section className="about__about-us">
                    <Article
                        image={about_us.image}
                        subtitle={about_us.subtitle}
                        title={about_us.title}
                        text={about_us.text}
                        footer={about_us.footer}
                    />
                </section>

            </div>

            <div className="about__footer">
                {footer}
            </div>
        </div>
    )
}