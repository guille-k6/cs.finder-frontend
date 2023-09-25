import css from './crateComponent.css';
import Image from 'next/image';

function CrateComponent(crate) {
    const {id, name, image} = crate.crate;
    const border_style = { 
        borderRight: `2px solid var(--main-700)`,
        backgroundColor: `var(--csgo-Mil-spec)`,
    }
    return (<div className='trade-petition-item-container'>
                <div className='item-image-container crate-image-container' style={border_style}>
                    <Image src={image} width={0} height={0} sizes="100vw" className='laImage' alt='Counter Strike sticker'/>
                </div>
                <div className='skin-detail-container'>
                    <div className='sticker-info-container d-flex'>
                        <p className='sticker-item-info item-tag'>Contenedor</p>
                        <p className='sticker-item-info sticker-item-name'>{name}</p>
                    </div>
                </div>
            </div>
            )
}

export default CrateComponent