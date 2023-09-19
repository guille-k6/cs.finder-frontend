import css from './crateComponent.css';
import Image from 'next/image';

function CrateComponent(crate) {
    const {id, name, image} = crate.crate;
    return (<div className='crate-container'>
                <div className='sticker-image-container'>
                    <Image src={image} width={0} height={0} sizes="100vw" className='laImage' alt='Counter Strike sticker'/>
                </div>
                <div className='sticker-info-container d-flex'>
                    <p className='sticker-item-info item-tag'>Nombre</p>
                    <p className='sticker-item-info sticker-item-name'>{name}</p>
                </div>

            </div>
            )
}

export default CrateComponent