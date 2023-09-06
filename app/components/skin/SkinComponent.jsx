import css from './skinComponent.css';
import StickerComponent from '../sticker/StickerComponent';

function SkinComponent(skin) {

   const { id, weapon, name, image, rarity, condition, stattrak,  souvenir, float_value, pattern, stickers} = skin.skin;
  return (
    <div className='skin-container'>
        <p>{id}</p>
        <p>{weapon}</p>
        <p>{name}</p>
        <p>{id}</p>
        <p>{image}</p>
        <p>{rarity}</p>
        <p>{condition}</p>
        <p>{stattrak}</p>
        <p>{souvenir}</p>
        <p>{float_value}</p>
        <p>{pattern}</p>
        {stickers?.length > 0 && (
          <ul>
            Stickers:
            {stickers.map((sticker, index) => (
              <li key={index}>
                <StickerComponent sticker={sticker}></StickerComponent>
              </li>
            ))}
          </ul>
        )}
    </div>
  )
}

export default SkinComponent