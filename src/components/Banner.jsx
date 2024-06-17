import './Banner.css';

export default function Banner({imageSrc, content, className}){

    const bannerClassName = 'banner'+(className || '');

    return (
        <div className={bannerClassName + ' banner'}>
            <div className="banner__content">
                { typeof content == 'function' ? content() : content }
            </div>
            <div className="banner__image">
                <img className="" src={imageSrc} alt="" />
            </div>
        </div>
    )
}