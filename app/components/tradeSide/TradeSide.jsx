import './tradeSide.css'
import StickerComponent from "../sticker/StickerComponent";
import CrateComponent from "../crate/CrateComponent";
import SkinComponent from "../skin/SkinComponent";
import MoneyPetitionComponent from "../moneyPetition/MoneyPetitionComponent";
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import CallMissedOutgoingIcon from '@mui/icons-material/CallMissedOutgoing';

const TradeSide = (props) => {
    const {side, title} = props;
    const {crates, money, skins, stickers} = side;

    return (
        <div className="trade-side-container">
            <div className='d-flex justify-space-between tradepetitioncontainer'>
            <p className='trade-side-title'>
                {title === 'Espera' && <ArrowDownwardIcon className='trade-side-icon offer-color'/>}
                {title === 'Ofrece' && <CallMissedOutgoingIcon className='trade-side-icon request-color'/>}
                {title}
            </p>
            {money.amount != null && money.country_code != null && (
                <> 
                <MoneyPetitionComponent moneyPetition={money}/>
                </>
            )}
            </div>
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
        </div>
    );
}

export default TradeSide;
