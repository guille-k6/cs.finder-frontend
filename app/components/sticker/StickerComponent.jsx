import './stickerComponent.css';
import Image from 'next/image';

function StickerComponent(props) {
    const {id, rarity, name, description, image} = props.sticker;

    return (
            <div className='sticker-container' data-id={id}>
                <div className='sticker-image-container'>
                    <Image src={image} width={0} height={200} sizes="100vw" className='laImage' alt='Counter Strike sticker'/>
                </div>
                <div>
                    <p>{name}</p>
                    <p>{rarity}</p>
                </div>

            </div>
        )

}

export default StickerComponent;