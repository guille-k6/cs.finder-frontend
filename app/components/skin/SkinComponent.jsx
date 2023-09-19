'use client';
import './skinComponent.css';
import StickerComponent from '../sticker/StickerComponent';
import Image from 'next/image';
import MiniSticker from '../miniSticker/MiniSticker';

function SkinComponent(props) {

  const { id, weapon, name, image, rarity, condition, stattrak,  souvenir, float_value, pattern, stickers} = props.skin;
  if(stickers.length>0){
    console.log(`Hola, soy la skin ${name} y tengo ${stickers.length} stickers`);
  }else{
    console.log('no hay stickers');
  }
  const border_style = {
    borderColor: `var(--csgo-${rarity})`,
  }
  return (
    <div className='skin-container'>
        <p>{weapon}</p>
        <p>{name}</p>
        <p>{id}</p>
        <div className='skin-image-container' style={border_style}>
          <Image src={image} width={0} height={0} sizes="100vw" className='laImage' alt='CSGO Skin'/>
          <div className='skin-stickers-container'>
            {stickers.map((sticker, index) => (
                  <MiniSticker key={index} sticker={sticker}></MiniSticker>
              ))}
          </div>
        </div>
        <p>{rarity}</p>
        <p>{condition}</p>
        <p>{stattrak}</p>
        <p>{souvenir}</p>
        <p>{float_value}</p>
        <p>{pattern}</p>
        {stickers?.length > 0 && (
          <ul>
            Stickers:
          </ul>
        )}
    </div>
  )
}

export default SkinComponent