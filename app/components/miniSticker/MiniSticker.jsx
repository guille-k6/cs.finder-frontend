import './miniSticker.css';
import Image from 'next/image';

/*
    This is the mini sticker that when a skin image has stickers 
*/

const MiniSticker = (props) => {

    const {image, rarity} = props.sticker;
    const border_style = {
        borderColor: `var(--csgo-${rarity})`,
    }

    return (
        <div className='mini-sticker-image-container' style={border_style}>
            <Image src={image} width={0} height={0} sizes="100vw" className='mini-sticker-image' alt='Counter Strike sticker'/>
        </div>
    );
};


export default MiniSticker;
