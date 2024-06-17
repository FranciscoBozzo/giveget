import './Icon.css'

export default function Icon({src, alt}){
    return (
        <img className="icon" src={src} alt={alt} />
    )
}