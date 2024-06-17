import './Faqs.css'

export default function Faqs({header, footer}){
    return (
        <div className="faqs">
            <div className="faqs__header header--default">
                {header}
            </div>
            
            <div className="faqs__body">

            </div>

            <div className="faqs__footer">
                {footer}
            </div>
        </div>
    )
}