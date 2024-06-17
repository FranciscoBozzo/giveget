import Article from './Article';
import './Card.css';

export default function Card({ image, ...articleProps }){

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
            <div className="card__header"></div>

            { renderImage() }

            <div className="card__body">
                <Article {...articleProps} ></Article>
            </div>
        </div>
    )
}