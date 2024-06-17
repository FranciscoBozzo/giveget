import React, { useState } from "react"

import './Dropdown.css'
import CloseButton from "./CloseButton";

export default function Dropdown(props){

    const [isOpen, setOpen] = useState(false);

    const items = props.items;

    const onClick = () => {
        console.log('open dropdown')
        setOpen(!isOpen);
    }
    
    return (
        <div className="dropdown">
            {
                <props.trigger theme={props.theme} onClick={onClick}/>
            }

            <div className={ (!isOpen ? 'hidden' : '') + " dropdown__list"}>
                <div className="close">
                    { props.closable ? <CloseButton onClick={onClick}/> : '' }
                </div>
                
                {
                    props.header ? <div className="dropdown__header"><props.header/></div> : ''
                }

                <ul>
                {
                    items.map((item,key)=>{
                        const itemComponent = typeof item == 'function' ? item() : item;
                        return (<li key={key}>{itemComponent}</li>)
                    })
                }
                </ul>
            </div>
        </div>
    )
}


function isElement(element) {
    return React.isValidElement(element);
}

function isClassComponent(component) {
    return (
        typeof component === 'function' && 
        !!component.prototype.isReactComponent
    )
}

function isFunctionComponent(component) {
    return (
        typeof component === 'function' && 
        String(component).includes('return React.createElement')
    )
}

function isReactComponent(component) {
    return (
        isClassComponent(component) || 
        isFunctionComponent(component)
    )
}