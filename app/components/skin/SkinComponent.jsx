import './skinComponent.css';
import Image from 'next/image';
import MiniSticker from '../miniSticker/MiniSticker';

function SkinComponent(props) {

  function weaponName(){
    return weapon + ' | ' + name;
  }

  const { id, weapon, name, image, rarity, condition, stattrak,  souvenir, float_value, pattern, stickers} = props.skin;

  const border_style = { 
    borderRight: `4px solid var(--csgo-${rarity})`,
    backgroundColor: `var(--csgo-${rarity})`,
  }

  const imageClasses = `skin-image${stickers.length>0 ? ' image-with-stickers' : ''}`;


  return (
    <div className='trade-petition-item-container'>
      <div className='item-image-container' style={border_style}>
        <Image src={image} width={0} height={0} sizes="100vw" className={imageClasses} alt='CSGO Skin'/>
        <div className='skin-stickers-container'>
          {stickers.map((sticker, index) => (
                <MiniSticker key={index} sticker={sticker}></MiniSticker>
            ))}
        </div>
        {stattrak && <div className='skin-stattrak'>StatTrak™</div>}
        {souvenir && <div className='skin-souvenir'>Souvenir</div>}
      </div>
      <div>
        <div className='d-flex'>
          <p className='sticker-item-info item-tag'>Nombre</p>
          <p className='sticker-item-info sticker-item-name'>{weaponName()}</p>
        </div>
        <div className='d-flex'>
          <p className='sticker-item-info item-tag'>Estado</p>
          <p className='sticker-item-info sticker-item-name'>{condition}</p>
        </div>
        { float_value &&
        <div className='d-flex'>
          <p className='sticker-item-info item-tag'>Float</p>
          <p className='sticker-item-info sticker-item-name'>{float_value}</p>
        </div>}
        { pattern &&
        <div className='d-flex'>
          <p className='sticker-item-info item-tag'>Pattern</p>
          <p className='sticker-item-info sticker-item-name'>{pattern}</p>
        </div>}
      </div>

    </div>
  )
}

export default SkinComponent