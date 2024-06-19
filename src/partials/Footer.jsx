import { Link } from 'react-router-dom';
import Logo from '../components/Logo';
import './Footer.css'
import useLang from '../effects/useLang';


const getTexts = (lang) => {
    const map = {
        es: {
            home: 'Home',
            products: 'Productos',
            about: 'About us',
            foryou: 'Para ti',
            contact: 'Contacto',
            login: 'Log in',
            download: 'Descarga la app',
            fees: 'Tarifas',
            faqs: 'Q&A',

            disclaimer: '* Finanleads LLC is not a bank. Banking services for US residents are provided by Solid Financial Technologies, Inc as an agent of its bank partners, members FDIC. Banking services for Non-US residents are provided by Think Green Services INC.',

            author_1_1: 'We make a living by WHAT WE GET, but we make a life by WHAT WE GIVE',
            author_1_2: 'Winston Churchill',

            copyright_1_1: 'Derechos reservados',
            copyright_1_2: 'Términos y condiciones',
            copyright_1_3: 'Política de privacidad'
        },
        en: {
            home: 'Home',
            products: 'Products',
            about: 'About us',
            foryou: 'For you',
            contact: 'Contact us',
            login: 'Log in',
            download: 'Download app',
            fees: 'Fees',
            faqs: 'FAQs',

            disclaimer: '* Finanleads LLC is not a bank. Banking services for US residents are provided by Solid Financial Technologies, Inc as an agent of its bank partners, members FDIC. Banking services for Non-US residents are provided by Think Green Services INC.',

            author_1_1: 'We make a living by WHAT WE GET, but we make a life by WHAT WE GIVE',
            author_1_2: 'Winston Churchill',

            copyright_1_1: 'All rights reserved',
            copyright_1_2: 'Terms & Conditions',
            copyright_1_3: 'Privacy'
        }
    }
    return map[lang];
}

export default function Footer(){
    const lang = useLang();
    const copy = getTexts(lang);

    return(
        <footer className="footer container">
            <div className="footer__sitemap-social">
                <section className="sitemap | fs-300">
                    <nav>
                        <ul role="navigation">
                            <li aria-label="products">
                                <Link to="/products">{copy.products}</Link>
                            </li>
                            <li aria-label="about">
                                <Link to="/about">{copy.about}</Link>
                            </li>
                            <li aria-label="for you">
                                <Link to="/for-you">{copy.foryou}</Link>
                            </li>
                            <li aria-label="contact us">
                                <Link to="/contact-us">{copy.contact}</Link>
                            </li>
                            {
                                /*
                            <li aria-label="frequent questions">
                                <Link to="/faqs">{copy.faqs}</Link>
                            </li>*/
                            }
                            <li aria-label="fees">
                                <Link to="/fees">{copy.fees}</Link>
                            </li>
                        </ul>
                    </nav>
                </section>

                <section className="social">
                    <ul className='social__list' role="list" aria-label="social">
                        <li className='social__item'>
                            <a aria-label="facebook" href="https://www.facebook.com/people/Giveandgetfintech/100083379420571/"><img src="data:image/png;base64,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" alt="Facebook" /></a>
                        </li>
                        <li className='social__item'>
                            <a aria-label="instagram" href="https://www.instagram.com/giveandgetfinance?igsh=MWtrZndnd2owajd5NQ=="><img src="data:image/png;base64,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" alt="Instagram" /></a>
                        </li>
                        <li className='social__item'>
                            <a aria-label="linked in" href="https://www.linkedin.com/company/give-get-fintech/?viewAsMember=true"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADYAAAA2CAYAAACMRWrdAAAABHNCSVQICAgIfAhkiAAABIpJREFUaEPtmmtIFFEUx88dpajUPkk0s+6a9LAgSsikvoRJ0YO2B2VJbxGyJKIPEZUp2ovoQ0RURmZFRQ/Fx0b1pbQHPUyLwiDtg7vqzkR9c+0JNrdzl2Z97M4jUndGdj6pc7zz/91z7rnnzhwCBq4ku5BBCSwhFGZTIDwAHUcIGWPgX//bhFL6DYB8JkAl1FAvd8PdNlGs0xuYaBhEJyYIOQhwkBBAGPNclIJEgRZ52sUyVNUdSlkoMC4xgc/kCCkGQiaZBydYCcJ9BAr57naxAu/S3hZBYBPsQia6/jJ6aZSZoRRtGKrfgdIsd4fkUgVLcthWoWE5hh9nBahecDL+nIWeu638LeCxJJttOuWg3iqe6j/xuO5+0N90rkcU37J7ChiXZLc14W/T9Dw1JTkZYmJi4evXLmhpbtYzH9r7FN63tntn4ENlPxhmv1yOI+e0VDCgouIjkDx1asCs+cMHKCw4YCpAWabbPR1iCYmPj4+JHT2iFZ0XrwYWGxcHN29VgGCzBZmIXi+sW7sauny+ofWO6tPoF9+3XxMJemsLeuuSlqr1GzbCnr37VE1Kzp6BknNnTAKGcSjTrQTTO6Z2sllL1clTpyF9foaqSV3tQ9i9a6dpwDD9nycTHLZHuNDmaakqPnwUnMtXWAYMd+rHCCZ4CBCHFhiDYnBq14njx+D6taum8RhWJC0EN+WfqGiknqrSsiswKzU1yKyxoQFysjUjWW/owbjfycD61FhamTF3ex44ncuBZUmWBV2uGn/SME9G7FFvGGwwpnUwx4yADebsKmMr5drrxob/fpwhj/GCgGtLPd27XNUgiWJAjJa9JIngqqn227K1umyZE9Zv2BRU1fh8nVBXWwt3cB03Nrz6Z1BDYLNSZ0Np2WXVwXOyt/R5uJa9kkWZdy5cvARxcWN1Rdc+fIA1af4/JamwgLFMqjVRoUhrqqug8OAB3UlQDIYcjBXN7ApVUOupLsjfHwhjPdshB9MTpHWfTcrSxQsNDWEpMEa0ZNGCPolKjTKsYCyRuGqqQJIk4HkeC+2VIcu23uKNhmPYwNQE6p0kjJ79wgKmVTizve3ps5eq68jo2S8sYHrHnFvllcD2uVCX0dNEWMD6b+j9AdSOSMzO0mDs/Qp7zzLsPMbOfbk78iJgoWbAlGss4jGN4irisYE6j7FJ1kv3kVCMhKLKDAzkq4FIKA7ABq37ituCHus09FHCamD+jxL4teUlfm1JM/QiwSJG/s9I2E5Ugo0q2yyi2ZhMSk+RRNv4RVxU1H1j/2ENK7mbzvF3DWA4vsFwTLGGbG2VuL7eudvEmX/bIfgVHMdVDQcwWZZXejqk6kBnznDwmuIt5qAeMEGYAVHkhZVbjogMaa1eb1MfMP9aswursTWi3GohiY1tMupe09rmrVS0B7f1JfBOTP830HC0FQBZcxghFKHEu731huwwdTj4FA7ITcyUk80M52/E7IZMtyi+669Tu3XWLmQjXKEpW2cpPYTNYKUIZLh1NshJDkFI56JhKTY7p4Wr2RlFiQTk57ie7rk7Pj3Ri6Q/EL/0Ut8H2QUAAAAASUVORK5CYII=" alt="Linked In" /></a>
                        </li>
                    </ul>
                </section>
            </div>
            

            <section className="disclaimer">
                <p>{copy.disclaimer}</p>
            </section>

            <section className="footer__end">
                <div className="author__cite">
                    <p className="cite">{copy.author_1_1}</p>
                    <p className="author">{copy.author_1_2}</p>
                </div>

                <div>
                    <Logo></Logo>
                    <div className="copyright | fs-300">
                        <p>© 2024 | {copy.copyright_1_1} | <a className="fw-medium" id='terms' href="https://secure.giveandget.io/terms">{copy.copyright_1_2}</a> | <a className="fw-medium" id="privacy" href="https://secure.giveandget.io/privacy">{copy.copyright_1_3}</a></p>
                    </div>
                </div>
            </section>
        </footer>
    )
}