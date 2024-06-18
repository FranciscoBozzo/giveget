import Article from './Article';
import './Card.css';

export default function Card({ image, ...articleProps }){

    const renderHeader = () => {
        if(articleProps.header)
            return (<div className="card__header"></div>);
    }

    const renderImage = () => {
        if (image) {
            return (
                <div className="card__image">
                    <img src={image} alt={articleProps.title}></img>
                </div>)
        }
    }

    return (
        <div className="card">
            {renderHeader()}
            { renderImage() }

            <div className="card__body">
                <Article {...articleProps} ></Article>
            </div>
        </div>
    )
}