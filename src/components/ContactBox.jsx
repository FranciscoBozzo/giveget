import useLang from '../effects/useLang'
import './ContactBox.css'
import GradientButton from './GradientButton'

const getTexts = ( lang ) => {
    const map = {
        es: {
            contact_1_1: 'Contáctanos',

            placeholder_1_1: "Nombre y Apellido",
            placeholder_1_2: "Correo Electrónico",
            placeholder_1_3: "Mensaje",

            button_1_1: "Enviar"
        },
        en: {
            contact_1_1: 'Contact us',

            placeholder_1_1: "Name and last name",
            placeholder_1_2: "Email",
            placeholder_1_3: "Message",

            button_1_1: "Submit"
        }
    }

    return map[lang]
}

export default function ContactBox({lang = 'en'}){
    const copy = getTexts(lang)

    return (
        <div className="contact-box__wrapper">
            <form action="/api" method="POST" id="contact-form" className="contact-box">
                <div className="contact-box__header">
                    <h2 className="fw-bold fs-800">{copy.contact_1_1}</h2>
                </div>
                <div className="contact-box__body">
                    <input type="text" name="name" id="name" required placeholder={copy.placeholder_1_1} />
                    <input type="email" name="email" id="email" required placeholder={copy.placeholder_1_2}/>
                    <textarea name="message" id="message" cols="30" rows="10" required placeholder={copy.placeholder_1_3}></textarea>
                </div>
                <div className="contact-box__footer">
                    <GradientButton type="submit" text={copy.button_1_1}></GradientButton>
                </div>
            </form>
        </div>
    )
}