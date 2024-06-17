import Icon from './Icon'
import './IconItem.css'

export default function IconItem({icon, title, description, className}){
    return (
        <div className="icon-item">
            <div className="icon-item__icon">
                <Icon src={icon}></Icon>
            </div>
            <div>
                <h3 className="icon-item__title">{title}</h3>
                <p className="icon-item__description">{description}</p>
            </div>
        </div>
    )
}