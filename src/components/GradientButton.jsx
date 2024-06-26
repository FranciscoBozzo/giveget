import './GradientButton.css'

export default function GradientButton({type, htmlFor, text}){
    return (
    <button className="button gradient-primary" type={ type || 'button'} htmlFor={htmlFor || undefined}>
        {text}
    </button>)
}