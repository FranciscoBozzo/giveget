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

    return selected.categories.map( ( { title, nodes, disclaimer }, key ) => {
        return (
                <div key={key} className={ (selected.title + "_" + title).toLowerCase().replace(/S/g, '-')+ ' node__category' + ' depth-' + depth }>
                    <h2 className='category__title | fs-300'>{title}</h2>
                    <div className="node__list">
                        {
                            nodes.map( (node, key) => {
                                const isClickable = node.categories ? 'clickable' : ''

                                return( 
                                <div key={key} className='node__item'>
                                    <div onClick={() => setClicked(node)} className={(node ==  clicked ? 'active ' : '') + 'node__button ' + isClickable}>
                                        <span>{node.title}</span>
                                    </div>
                                    { node.detail ? <div className='node__detail fs-300'><p>{node.detail}</p></div> : ''}

                                </div>)
                            })
                        }
                        {
                            disclaimer ? <div className='mt-500 fs-200'><p>{disclaimer}</p></div> : ''
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