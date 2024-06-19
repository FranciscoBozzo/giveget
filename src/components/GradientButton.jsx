import './GradientButton.css'

export default function GradientButton({type, htmlFor, text}){
    return (
    <button className="button gradient-button" type={ type || 'button'} htmlFor={htmlFor || undefined}>
        {text}
    </button>)
}