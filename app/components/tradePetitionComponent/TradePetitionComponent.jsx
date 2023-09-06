import StickerComponent from "../sticker/StickerComponent";
import CrateComponent from "../crate/CrateComponent";
import SkinComponent from "../skin/SkinComponent";
import MoneyPetitionComponent from "../moneyPetition/MoneyPetitionComponent";

function TradePetitionComponent(tradePetition) {
  const { id, creationms, expects, offers } = tradePetition.tradePetition;

  const fecha_creacion = new Date(creationms);
  return (
    <div style={{color: 'white'}}>
        <p style={{fontSize: 'x-large', color: 'red'}}>Peticion de intercambio: #{id}</p>
        <p>Fecha de creacion: {fecha_creacion.toString()}</p>
        <h1>ESPERA </h1>
        {expects.stickers?.length > 0 && (
          <ul>
            Stickers:
            {expects.stickers.map((sticker, index) => (
              <li key={index}>
                <StickerComponent sticker={sticker}></StickerComponent>
              </li>
            ))}
          </ul>
        )}
        {expects.crates?.length > 0 && (
          <ul>
            Crates:
            {expects.crates.map((crate, index) => (
              <li key={index}>
                <CrateComponent crate={crate}></CrateComponent>
              </li>
            ))}
          </ul>
        )}
        {expects.skins?.length > 0 && (
          <ul>
            Skins:
            {expects.skins.map((skin, index) => (
              <li key={index}>
                <SkinComponent skin={skin}></SkinComponent>
              </li>
            ))}
          </ul>
        )}
        {expects.money.amount != null && expects.money.country_code != null && (
          <>
            <p>Dinero: </p>
            <MoneyPetitionComponent moneyPetition={expects.money}></MoneyPetitionComponent>
          </>
        )}
        <h1>OFRECE</h1>
        {offers.stickers?.length > 0 && (
          <ul>
            Stickers:
            {offers.stickers.map((sticker, index) => (
              <li key={index}>
                <StickerComponent sticker={sticker}></StickerComponent>
              </li>
            ))}
          </ul>
        )}
        {offers.crates?.length > 0 && (
          <ul>
            Crates:
            {offers.crates.map((crate, index) => (
              <li key={index}>
                <CrateComponent crate={crate}></CrateComponent>
              </li>
            ))}
          </ul>
        )}
        {offers.skins?.length > 0 && (
          <ul>
            Skins:
            {offers.skins.map((skin, index) => (
              <li key={index}>
                <SkinComponent skin={skin}></SkinComponent>
              </li>
            ))}
          </ul>
        )}
        {offers.money.amount != null && offers.money.country_code != null && (
          <>
            <p>Dinero: </p>
            <MoneyPetitionComponent moneyPetition={offers.money}></MoneyPetitionComponent>
          </>
        )}       
    </div>
  )
}

export default TradePetitionComponent;
