import StickerComponent from "../sticker/StickerComponent";
import CrateComponent from "../crate/CrateComponent";
import SkinComponent from "../skin/SkinComponent";
import MoneyPetitionComponent from "../moneyPetition/MoneyPetitionComponent";

const TradeSide = (props) => {
    const {side, title} = props;
    const {crates, money, skins, stickers} = side;

    return (
        <>
            <h1>{title}</h1>
            {stickers.length > 0 && (
                <ul>
                Stickers:
                {stickers.map((sticker, index) => (
                    <li key={index}>
                    <StickerComponent sticker={sticker}/>
                    </li>
                ))}
                </ul>
            )}
            {crates.length > 0 && (
                <ul>
                Crates:
                {crates.map((crate, index) => (
                    <li key={index}>
                    <CrateComponent crate={crate}/>
                    </li>
                ))}
                </ul>
            )}
            {skins.length > 0 && (
                <ul>
                Skins:
                {skins.map((skin, index) => (
                    <li key={index}>
                    <SkinComponent skin={skin}/>
                    </li>
                ))}
                </ul>
            )}
            {money.amount != null && money.country_code != null && (
                <>
                <p>Dinero: </p>
                <MoneyPetitionComponent moneyPetition={money}/>
                </>
            )}
        </>
    );
}

export default TradeSide;
