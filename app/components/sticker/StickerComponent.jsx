import './stickerComponent.css';
import Image from 'next/image';

function StickerComponent(props) {
    const {id, rarity, name, description, image} = props.sticker;
    const clean_name = name.substring(10);
    const border_style = {
        borderColor: `var(--csgo-${rarity})`,
    }

    return (
            <div className='sticker-container'>
                <div className='sticker-image-container' style={border_style}>
                    <Image src={image} width={0} height={0} sizes="100vw" className='laImage' alt='Counter Strike sticker'/>
                </div>
                <div className='sticker-info-container d-flex'>
                    <p className='sticker-item-info item-tag'>Nombre</p>
                    <p className='sticker-item-info sticker-item-name'>{clean_name}</p>
                </div>

            </div>
        )

}

export default StickerComponent;