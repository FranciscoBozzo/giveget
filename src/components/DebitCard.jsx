import './DebitCard.css'

export default function DebitCard({image, content}){
    return (
        <div className="debit-card">
            <div className='debit-card__content'>
                <p className="debit-card__title">{content.title}</p>
                <div className="debit-card__list">
                {
                    content.items.map( (i,key) => <p key={key}>{i}</p>)
                }
                </div>
            </div>
            <img className="debit-card__image" src={image} alt="" />
        </div>
    )
}