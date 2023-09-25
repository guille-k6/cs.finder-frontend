import './tradeSide.css'
import StickerComponent from "../sticker/StickerComponent";
import CrateComponent from "../crate/CrateComponent";
import SkinComponent from "../skin/SkinComponent";
import MoneyPetitionComponent from "../moneyPetition/MoneyPetitionComponent";
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import CallMissedOutgoingIcon from '@mui/icons-material/CallMissedOutgoing';

const TradeSide = (props) => {
    const {side, title, user} = props;
    const {crates, money, skins, stickers} = side;
    const no_items = `${user.nickname} no ${title === 'Ofrece' ? 'ofrece' : 'espera'} ningún item.`

    return (
        <div className="trade-side-container">
            <div className='d-flex justify-space-between trade-side-title-container'>
                <p className='trade-side-title'>
                    {title === 'Espera' && <ArrowDownwardIcon className='trade-side-icon offer-color'/>}
                    {title === 'Ofrece' && <CallMissedOutgoingIcon className='trade-side-icon request-color'/>}
                    {title}
                </p>
                {!!money.amount && !!money.country_code && (
                    <> 
                    <MoneyPetitionComponent moneyPetition={money}/>
                    </>
                )}
            </div>
            <div className='items-container'>
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
                {stickers.length === 0 && crates.length === 0 && skins.length === 0 && (
                    <p className='no-items-text'>
                        {no_items}
                    </p>
                )}               
            </div>
        </div>
    );
}

export default TradeSide;
