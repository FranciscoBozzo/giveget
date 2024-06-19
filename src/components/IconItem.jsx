import Icon from './Icon'
import './IconItem.css'

export default function IconItem({icon, title, description, className}){
    return (
        <div className="icon-item">
            <div className="icon-item__icon">
                <Icon src={icon}></Icon>
            </div>
            <div>
                <h3 className="icon-item__title | fs-500 fw-medium lh-1 mb-200">{title}</h3>
                <p className="icon-item__description | fs-300 fw-normal">{description}</p>
            </div>
        </div>
    )
}