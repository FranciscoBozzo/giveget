import './GradientButton.css'

export default function GradientButton({type, htmlFor, text}){
    return (
    <button className="gradient-button" type={ type || 'button'} htmlFor={htmlFor || undefined}>
        {text}
    </button>)
}