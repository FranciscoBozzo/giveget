import { useState } from 'react'
import GradientButton from './GradientButton'

import { Slide, ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import './ContactBox.css'

const getTexts = ( lang ) => {
    const map = {
        es: {
            contact_1_1: 'Contáctanos',

            placeholder_1_1: "Nombre y Apellido",
            placeholder_1_2: "Correo Electrónico",
            placeholder_1_3: "Mensaje",

            button_1_1: "Enviar",

            error_1_1: "Ocurrió un error. Iténtalo de nuevo más tarde.",
            success_1_1: "¡Gracias por contactarte con nosotros! Pronto nos pondremos en contacto contigo."
        },
        en: {
            contact_1_1: 'Contact us',

            placeholder_1_1: "Name and last name",
            placeholder_1_2: "Email",
            placeholder_1_3: "Message",

            button_1_1: "Submit",

            error_1_1 : "An error occurred. Please try again later.",
            success_1_1 : "Thank you for contacting us! Will will get back to you shortly."
        }
    }

    return map[lang]
}

export default function ContactBox({lang = 'en'}){
    const copy = getTexts(lang)

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = async (ev) => {
        ev.preventDefault();

        try {
            const response = await fetch('https://portal.giveandget.io/api/contact', {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ name, email, message})
            });

            const result = response.json()
            return toast.success(copy.success_1_1);

        } catch (err){
            return toast.error(copy.error_1_1);
        }
    }

    return (
        <div className="contact-box__wrapper">
            <ToastContainer
                position="top-center"
                autoClose={3000}
                hideProgressBar={true}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable={false}
                pauseOnHover
                theme="colored"
                transition={Slide}
            />
            <form onSubmit={handleSubmit} id="contact-form" className="contact-box">
                <div className="contact-box__header">
                    <h2 className="fw-bold fs-800">{copy.contact_1_1}</h2>
                </div>
                <div className="contact-box__body">
                    <input onInput={(e) => setName(e.target.value)} type="text" name="name" id="name" required placeholder={copy.placeholder_1_1} />
                    <input onInput={(e) => setEmail(e.target.value)} type="email" name="email" id="email" required placeholder={copy.placeholder_1_2}/>
                    <textarea onInput={(e) => setMessage(e.target.value)} name="message" id="message" cols="30" rows="10" required placeholder={copy.placeholder_1_3}></textarea>
                </div>
                <div className="contact-box__footer">
                    <GradientButton type="submit" text={copy.button_1_1}></GradientButton>
                </div>
            </form>
        </div>
    )
}