import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import SpeechBubble from '../speechBubble/speechBubble';
import TradeSide from '../tradeSide/TradeSide';
import CompareArrowsIcon from '@mui/icons-material/CompareArrows';
import SwapVerticalCircleIcon from '@mui/icons-material/SwapVerticalCircle';

function calcularDiferenciaDeTiempo(date) {
  const now = new Date();
  const msDifference = now - date;
  const seconds = Math.floor(msDifference / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);
  const weeks = Math.floor(days / 7);

  if (weeks > 2) {
    return `hace más de 2 sem.`;
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
    return 'hace menos de un min';
  }
}



function TradePetitionComponent(props) {

  const { id, creationms, description, expects, offers, user } = props.tradePetition;

  const fecha_creacion = calcularDiferenciaDeTiempo(new Date(parseInt(creationms)));

  return (
      <div className="container trade-petition-container">
        <div className='d-flex justify-space-between'>
          <div className="trade-petition-name trade-petition-top-element">
            {/* For some reason, when I try to use the Image component. Next says that it cannot find the resource... */}
            <div className='trade-petition-name-layout'>
              <SwapVerticalCircleIcon fontSize='small'></SwapVerticalCircleIcon>
              <p>ID: #{id}</p>
            </div>
          </div>
          {!!description && <SpeechBubble description={description}/>}
          <div className="user-date-layout trade-petition-top-element">
            <div className='d-flex align-center'>
                <p className="trade-petition-user-nickname">{user.nickname}</p>
                <AccountCircleOutlinedIcon></AccountCircleOutlinedIcon>
            </div>
            <p className="trade-petition-creation-date">{fecha_creacion.toString()}</p>
          </div>
        </div> 

        <div className='d-flex justify-space-around'>
          <TradeSide side={offers} title="Ofrece" user={user}/>  
          <CompareArrowsIcon fontSize='large' className='trade-icon'/>
          <TradeSide side={expects} title="Espera" user={user}/>
        </div>
    
      </div>
  )
}

export default TradePetitionComponent;
