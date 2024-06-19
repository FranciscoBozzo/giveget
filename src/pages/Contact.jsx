import ContactBox from '../components/ContactBox';

import './Contact.css'

export default function Contact({header, footer}){
    return (
        <div className="contact">
            <div className="contact__header | padding-block-500 padding-inline-500">
                {header}
            </div>

            <div className="contact__body">
                <section className="contact__contact | container padding-block-600">
                    <ContactBox/>
                </section>
            </div>

            <div className="contact__footer">
                {footer}
            </div>
        </div>
    )
}