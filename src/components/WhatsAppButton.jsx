import WhatsAppIcon from '../assets/images/WhatsApp-Logo-Icon.svg'

export default function WhatsAppButton () {
    return (
    <div className='floating-button wtsp'>
        <a href="https://api.whatsapp.com/send?phone=14753300913&text=%C2%A1Hola!%20Quisiera%20obtener%20m%C3%A1s%20informaci%C3%B3n%20sobre%20abrir%20una%20cuenta%20en%20Estados%20Unidos%20%F0%9F%87%BA%F0%9F%87%B8">
        <img src={WhatsAppIcon} alt="" />
        </a>
    </div>)
}