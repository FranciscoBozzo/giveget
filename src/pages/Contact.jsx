import ContactBox from '../components/ContactBox';
import homeBackground from '../assets/images/home/home_hero_bg.png';

import './Contact.css'

export default function Contact({header, footer}){
    return (
        <div className="contact">
            <div className="contact__header header--default">
                {header}
            </div>
            <div className="contact__body">
                <div className="contact__background">
                    <img src={homeBackground} alt="" />
                </div>

                <section className="contact__contact">
                    <ContactBox/>
                </section>
            </div>

            <div className="contact__footer">
                {footer}
            </div>
        </div>
    )
}