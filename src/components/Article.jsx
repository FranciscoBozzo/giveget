import './Article.css';

export default function Article({image, subtitle, title, text, footer, children}){

    const renderText = () => {
        const arrText = Array.isArray(text) ? text : [text];
        return arrText.map( (paragraph, key) => <p key={key} className="article__text">{paragraph}</p>);
    }

    const renderFooter = () => {
        if (footer){
            return  (<p className="article__footer">
                {footer}
            </p>)
        }
    }

    const renderSubtitle = () => {
        if (subtitle){
            return  (<h3 className="article__subtitle">{subtitle}</h3>)
        }
    }

    const renderTitle = () => {
        if (title){
            return  (<h2 className="article__title">{title}</h2>)
        }
    }

    const renderImage = () => {
        if (image){
            return (
                <div className='article__image'>
                    <img src={image.source} alt={image.description} />
                </div>
            )
        }
    }

    return (
        <div className="article">
            {renderImage()}
            
            <div className="article__content">
                {renderSubtitle()}
                {renderTitle()}
                {renderText()}
                { renderFooter() }

                <div className='article__items'>
                    { children }
                </div>

            </div>
        </div>
    )
}