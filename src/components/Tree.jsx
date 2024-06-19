import { useEffect, useState } from 'react';

import './Tree.css';

export default function Tree ({ first, selected, depth=0}) {
    const [ clicked, setClicked ] = useState(null);
    
    useEffect( () => {
        const nodes = document.querySelectorAll('.node__item');

        for (let node of nodes){
            node.onclick = (ev) => setClicked(null)
        }

        return () => {
            for (let node of nodes){
                node.onclick = undefined
            }
        }
    }, []);

    if(!selected.categories && !first) return;

    return selected.categories.map( ( { title, nodes }, key ) => {
        return (
                <div key={key} className={ (selected.title + "_" + title).toLowerCase().replace(/S/g, '-')+ ' node__category' + ' depth-' + depth }>
                    <h2 className='category__title | fs-400 '>{title}</h2>
                    <div className="node__list">
                        {
                            nodes.map( (node, key) => {
                                return( 
                                <div key={key} className='node__item'>
                                    <div onClick={() => setClicked(node)} className={(node ==  clicked ? 'active ' : '') + 'node__button'}>
                                        <span>{node.title}</span>
                                    </div>
                                    { node.detail ? <div className='node__detail'><p>{node.detail}</p></div> : ''}

                                </div>)
                            })
                        }
                    </div>

                    {
                        nodes.map( (node) => {
                            if (clicked != node) return;

                            return <Tree depth={depth + 1} selected={clicked}></Tree>
                        })
                    }
                </div>
        )
    } )

}