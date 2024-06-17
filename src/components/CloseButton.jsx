import './CloseButton.css';

export default function CloseButton({theme, onClick}){
    return (
    <div onClick={onClick} className={ theme + " close__button"} type="button">
        <span></span>
        <span></span>
    </div>)
}