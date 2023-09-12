'use client'
import css from './tradePetitionComponent.css'
import StickerComponent from "../sticker/StickerComponent";
import CrateComponent from "../crate/CrateComponent";
import SkinComponent from "../skin/SkinComponent";
import MoneyPetitionComponent from "../moneyPetition/MoneyPetitionComponent";
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';

function calcularDiferenciaDeTiempo(date) {
  const now = new Date();
  const msDifference = now - date;
  const seconds = Math.floor(msDifference / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);
  const weeks = Math.floor(days / 7);

  if (weeks > 2) {
    return `hace más de 2 semanas`;
  } else if (weeks === 1 || weeks === 2) {
    return `hace ${weeks} semana${weeks === 1 ? '' : 's'}`;
  } else if (days >= 2) {
    return `hace ${days} día${days === 1 ? '' : 's'}`;
  } else if (days === 1) {
    return `hace un día`;
  } else if (hours >= 2) {
    return `hace ${hours} hora${hours === 1 ? '' : 's'}`;
  } else if (hours === 1) {
    return `hace una hora`;
  } else if (minutes >= 1) {
    return `hace ${minutes} minuto${minutes === 1 ? '' : 's'}`;
  } else {
    return 'hace menos de un minuto';
  }
}



function TradePetitionComponent(tradePetition) {
  const { id, creationms, description, expects, offers, user } = tradePetition.tradePetition;
  const fecha_creacion = calcularDiferenciaDeTiempo(new Date(parseInt(creationms)));



  return (
    <div className="container trade-petition-container">
      <div className='d-flex justify-space-between'>
        <div className="trade-petition-name trade-petition-top-element">Peticion de intercambio: #{id}</div>
        <div className='trade-petition-description trade-petition-top-element'>{description}</div>
        <div className="user-date-layout trade-petition-top-element">
          <div className='d-flex align-center'>
              <p className="trade-petition-user-nickname">{user.nickname}</p>
              <AccountCircleOutlinedIcon></AccountCircleOutlinedIcon>
          </div>
          <p className="trade-petition-creation-date">{fecha_creacion.toString()}</p>
        </div>
      </div>    

      <h1>ESPERA </h1>
      {expects.stickers.length > 0 && (
        <ul>
          Stickers:
          {expects.stickers.map((sticker, index) => (
            <li key={index}>
              <StickerComponent sticker={sticker}/>
            </li>
          ))}
        </ul>
      )}
      {expects.crates.length > 0 && (
        <ul>
          Crates:
          {expects.crates.map((crate, index) => (
            <li key={index}>
              <CrateComponent crate={crate}/>
            </li>
          ))}
        </ul>
      )}
      {expects.skins.length > 0 && (
        <ul>
          Skins:
          {expects.skins.map((skin, index) => (
            <li key={index}>
              <SkinComponent skin={skin}/>
            </li>
          ))}
        </ul>
      )}
      {expects.money.amount != null && expects.money.country_code != null && (
        <>
          <p>Dinero: </p>
          <MoneyPetitionComponent moneyPetition={expects.money}/>
        </>
      )}
      <h1>OFRECE</h1>
      {offers.stickers.length > 0 && (
        <ul>
          Stickers:
          {offers.stickers.map((sticker, index) => (
            <li key={index}>
              <StickerComponent sticker={sticker}/>
            </li>
          ))}
        </ul>
      )}
      {offers.crates.length > 0 && (
        <ul>
          Crates:
          {offers.crates.map((crate, index) => (
            <li key={index}>
              <CrateComponent crate={crate}/>
            </li>
          ))}
        </ul>
      )}
      {offers.skins.length > 0 && (
        <ul>
          Skins:
          {offers.skins.map((skin, index) => (
            <li key={index}>
              <SkinComponent skin={skin}/>
            </li>
          ))}
        </ul>
      )}
      {offers.money.amount != null && offers.money.country_code != null && (
        <>
          <p>Dinero: </p>
          <MoneyPetitionComponent moneyPetition={offers.money}/>
        </>
      )}       
    </div>
  )
}

export default TradePetitionComponent;
