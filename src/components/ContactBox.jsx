import './ContactBox.css'
import GradientButton from './GradientButton'

const getTexts = ( lang ) => {
    const map = {
        es: {

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

export default function ContactBox({ lang='en' }){
    const copy = getTexts(lang)

    return (
        <div className="contact-box__wrapper">
            <form id="contact-form" className="contact-box">
                <div className="contact-box__header">
                    <h2 className="title">{copy.contact_1_1}</h2>
                </div>
                <div className="contact-box__body">
                    <input type="text" name="name" id="name" placeholder={copy.placeholder_1_1} />
                    <input type="email" name="email" id="email" placeholder={copy.placeholder_1_2} />
                    <textarea name="message" id="message" cols="30" rows="10" placeholder={copy.placeholder_1_3}></textarea>
                </div>
                <div className="contact-box__footer">
                    <GradientButton text={copy.button_1_1}></GradientButton>
                </div>
            </form>
        </div>
    )
}