import './Article.css';

export default function Article({image, subtitle, title, text, footer, children}){

    const renderText = () => {
        const arrText = Array.isArray(text) ? text : [text];
        return arrText.map( (paragraph, key) => <p key={key} className="article__text | mb-400 fs-500 fw-normal">{paragraph}</p>);
    }

    const renderFooter = () => {
        if (footer){
            return  (<p className="article__footer | fs-500 fw-thin">
                {footer}
            </p>)
        }
    }

    const renderSubtitle = () => {
        if (subtitle){
            return  (<h3 className="article__subtitle | mb-300 lh-1 fs-500 fw-medium text-uppercase">{subtitle}</h3>)
        }
    }

    const renderTitle = () => {
        if (title){
            return  (<h2 className="article__title | mb-400 lh-1 fs-800 fw-bold">{title}</h2>)
        }
    }

    const renderImage = () => {
        if (image){
            return (
                <div className='article__image | mb-400'>
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