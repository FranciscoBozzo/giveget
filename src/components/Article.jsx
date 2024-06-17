import './Article.css';

export default function Article({subtitle, title, text, footer, children}){

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

    return (
        <div className="article">
            {renderSubtitle()}
            {renderTitle()}
            <>
                {renderText()}
            </>
            { renderFooter() }
            { children }
        </div>
    )
}