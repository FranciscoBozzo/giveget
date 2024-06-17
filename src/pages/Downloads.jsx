import GradientButton from '../components/GradientButton';

import './Downloads.css'

const buttons = [
    { 
        name: 'App Store',
        url: 'https://apps.apple.com/us/app/give-get/id6503308089?l=es-MX',
    },{ 
        name: 'Google Play',
        url: 'https://play.google.com/store/apps/details?id=io.giveandget.android&hl=es_AR',
    }
]

export default function Downloads({header, footer}){
    return (
        <div className="downloads">
            <div className="downloads__header header--default">
                {header}
            </div>
            
            <div className="downloads__body">

                <div className="downloads__buttons">
                    {
                        buttons.map( (button, key) => {
                            return <a key={key} className='gradient-button' href={button.url}>{button.name}</a>
                        })
                    }
                    
                </div>

            </div>

            <div className="downloads__footer">
                {footer}
            </div>
        </div>
    )
}