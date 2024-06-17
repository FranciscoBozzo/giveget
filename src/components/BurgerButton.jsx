import './BurgerButton.css';

export default function BurgerButton({theme, onClick}){
    return (
    <button onClick={onClick} className={ theme + " burger__button"} type="button">
        <span></span>
        <span></span>
        <span></span>
    </button>)
}