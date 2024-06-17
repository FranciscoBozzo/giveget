import { useState } from "react"
import { Link } from "react-router-dom";
import Logo from "./Logo";

import './BurgerMenu.css'

export default function BurgerMenu({items, theme}){

    const [isOpen, setOpen] = useState(false);

    const onClick = () => {
        setOpen(!isOpen);
    }
    
    return (
        <div>
            <div className={ ( !isOpen ? 'hidden ' : '')  + "burger__dropdown"}>
                <header className="header">
                    <Logo></Logo>
                    <div className="close" onClick={onClick}>X</div>
                </header>
                
                <ul>
                    {
                        items.map( (item, key) => {
                            return (
                            <li key={key}>
                                <Link to={item.url}>{item.name}</Link>
                            </li>)
                        })
                    }
                </ul>
            </div>
            
        </div>
    )
}