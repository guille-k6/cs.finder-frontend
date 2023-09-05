import css from './stickerComponent.css'

function StickerComponent(sticker) {

    const {id, rarity, description, image} = sticker.sticker;
    return (<div className='sticker-container'>
                <p>{id}</p>
                <p>{rarity}</p>
                <p>{description}</p>
                <p>{image}</p>
            </div>)

}

export default StickerComponent