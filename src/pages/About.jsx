
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
            focus_1_1: "Somos una fintech que está más cerca del cliente.",
            focus_1_2: "Nos enfocamos en proporcionar servicios financieros internacionales a nuestros clientes personales o comerciales con una amplia gama de soluciones que permiten un control flexible, simple y sin interrupciones de tus finanzas.",
            focus_1_3: "Obtén tu cuenta personal en Estados Unidos y comienza a ahorrar dólares y construir tu historial crediticio.",

            services_1_1: 'NUESTROS SERVICIOS',
            services_1_2: "En esta era de posibilidades ilimitadas, Give & Get es tu socio para lograr el éxito financiero.",
            services_1_3: "Comienza hoy y deja que tu dinero trabaje para ti en una moneda que fortalezca tu base financiera.",
            services_1_4: "Juntos, allanamos el camino para que sueñes en grande y conviertas esos sueños en realidades tangibles, otorgando acceso a una cuenta bancaria.",

            mission_1_1: "MISIÓN",
            mission_1_2: "Redifinir el empoderamiento financiero",
            mission_1_3: "Nuestra misión en Give & Get es redefinir el empoderamiento financiero a través de tecnología innovadora y alianzas estratégicas. Estamos comprometidos a ofrecer una plataforma centrada en el usuario que capacita a nuestros clientes con un control preciso sobre sus finanzas, garantizando seguridad y accesibilidad a cuentas internacionales en monedas fuertes.",
            mission_1_4: "Con un enfoque en servir diversos segmentos, nos comprometemos a atender a los mal bancarizados y desatendidos. A través de estos esfuerzos, buscamos cerrar la brecha, fomentando la inclusión financiera y la prosperidad para todos.",
           
            vision_1_1: "VISIÓN",
            vision_1_2: "Visualizamos un futuro donde todos puedan controlar y optimizar su libertad financiera de manera sencilla, democratizando el acceso al modelo financiero estadounidense, asegurando la oportunidad de abrazar la seguridad y el crecimiento al capacitar a individuos y empresas para navegar su panorama financiero con precisión y confianza absolutas.",
            
            about_1_1: "SOBRE NOSOTROS",
            about_1_2: "Profesionales financieros altamente capacitados",
            about_1_3: "Nuestro equipo está compuesto por un grupo de profesionales financieros altamente capacitados con una profunda experiencia en el mercado latinoamericano. Hemos establecido numerosas alianzas con importantes proveedores de servicios financieros en Estados Unidos y en toda América del Sur. Además de nuestro sólido entendimiento de las instituciones financieras, nuestro equipo cuenta con una amplia experiencia en comercio internacional, inversiones inmobiliarias y modelos de propiedad fraccionada de aeronaves.",
            
            beliefs_1_1: "Inclusión Financiera",
            beliefs_1_2: "Creemos firmemente que la inclusión financiera debe trabajar junto con la inclusión social.",
            beliefs_1_3: "Conciencia Empresarial",
            beliefs_1_4: "Creemos que si hay conciencia empresarial, hay menos dependencia del Estado.",
            beliefs_1_5: "Sueños",
            beliefs_1_6: "Creemos que todos deberían soñar y queremos ayudar a cumplir esos sueños.",
            beliefs_1_7: "Recompensas",
            beliefs_1_8: "Creemos que las personas que hacen el bien deberían ser recompensadas de la misma manera.",
        },
        en: {
            focus_1_1: "We are a fintech that is closer to the customer.",
            focus_1_2: "We are focused on providing international financial services to our Personal or Business clients with a wide range of solutions that allow a flexible, simple and seamless way to control your finances.",
            focus_1_3: "Get your personal account in the USA and start saving dollars and building your credit score.",

            services_1_1: "our services",
            services_1_2: "In this era of limitless possibilities, Give & Get is your partner in achieving financial success.",
            services_1_3: "Start today, and let your money work for you in a currency that strengthens your financial foundation.",
            services_1_4: "Together, we pave the way for you to dream big and turn those dreams into tangible realities by granting access to a bank account and loans.",

            mission_1_1: "mission",
            mission_1_2: "Redefine financial empowerment",
            mission_1_3: "Our mission at Give & Get is to redefine financial empowerment through innovative technology and strategic partnerships. We are committed to delivering a user-centric platform that empowers our customers with precise control over their finances, ensuring security and accessibility to international accounts in strong currencies.",
            mission_1_4: "With a focus on servicing various segments we are committed to attend the under bank and undeserved. Through these efforts, we strive to bridge the gap, fostering financial inclusion and prosperity for all.",
           
            vision_1_1: "vision",
            vision_1_2: "We envision a future where everyone can effortlessly control and optimize their financial freedom by democratizing access to the American financial model, ensuring the opportunity to embrace security and growth by empowering individuals and businesses to navigate their financial landscape with absolute precision and confidence.",
            
            about_1_1: "about us",
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
            <div className="about__header | padding-block-500 padding-inline-500">
                {header}
            </div>

            <section className="about__hero">
                <div className="title">
                    <p>{focus.title}</p>
                </div>
            </section>
            
            <div className="about__body">

                <section className="about__focus | container padding-block-600">
                    <Article
                        image={focus.image}
                        subtitle={focus.subtitle}
                        title={focus.title}
                        text={focus.text}
                        footer={focus.footer}
                    />
                </section>

                <section className="about__services | container padding-block-600">
                    <Article
                        image={ourServices.image}
                        subtitle={ourServices.subtitle}
                        title={ourServices.title}
                        text={ourServices.text}
                        footer={ourServices.footer}
                    />
                </section>

                <section className="about__beliefs | container-flex padding-block-600">
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

                <section className="about__mission | container padding-block-600">
                    <Article
                        image={mission.image}
                        subtitle={mission.subtitle}
                        title={mission.title}
                        text={mission.text}
                        footer={mission.footer}
                    />
                </section>

                <section className="about__vision | container-flex padding-block-600">
                    <Card
                        image={vision.image.source}
                        subtitle={vision.subtitle}
                        title={vision.title}
                        text={vision.text}
                    />
                </section>

                <section className="about__about-us | container padding-block-600">
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