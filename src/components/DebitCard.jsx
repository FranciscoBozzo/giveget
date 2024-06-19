import './DebitCard.css'

export default function DebitCard({content, theme}){
    return (
        <div className={"debit-card debit-card--" + (theme ? theme : '')}>
            <div className='debit-card__content'>
                <p className="debit-card__title">{content.title}</p>
                <div className="debit-card__list">
                    {
                        content.items.map( (i,key) => <p key={key}>{i}</p>)
                    }
                </div>
            </div>
        </div>
    )
}