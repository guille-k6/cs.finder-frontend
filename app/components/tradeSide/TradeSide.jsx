import './tradeSide.css'
import StickerComponent from "../sticker/StickerComponent";
import CrateComponent from "../crate/CrateComponent";
import SkinComponent from "../skin/SkinComponent";
import MoneyPetitionComponent from "../moneyPetition/MoneyPetitionComponent";

const TradeSide = (props) => {
    const {side, title} = props;
    const {crates, money, skins, stickers} = side;

    return (
        <div className="trade-side-container">
            <p className='trade-side-title'>{title}</p>
            {stickers.length > 0 && (
                <>
                {stickers.map((sticker, index) => (
                    <StickerComponent key={index} sticker={sticker}/>
                ))}
                </>
            )}
            {crates.length > 0 && (
                <>
                {crates.map((crate, index) => (
                    <CrateComponent key={index} crate={crate}/>
                ))}
                </>
            )}
            {skins.length > 0 && (
                <>
                {skins.map((skin, index) => (
                    <SkinComponent key={index} skin={skin}/>
                ))}
                </>
            )}
            {money.amount != null && money.country_code != null && (
                <>
                <p>Dinero: </p>
                <MoneyPetitionComponent moneyPetition={money}/>
                </>
            )}
        </div>
    );
}

export default TradeSide;
