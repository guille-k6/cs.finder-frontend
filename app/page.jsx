import SomeComponent from './someRoute/someComponent'
import TradePetitionComponent from './components/tradePetitionComponent/TradePetitionComponent';
import SwapHorizIcon from '@mui/icons-material/SwapHoriz';
//import functionReturnsJson from './utils/functionReturnsJson';



async function getFreeTradePetitions(){
  try{
    const response = await fetch('http://localhost:8080/api/trade_petitions_unlogged');
    const trade_petitions = await response.json();
    return trade_petitions;
    
  }catch(error){
    return console.log(error);
  }
}

async function Home() {

  const trade_petitions = await getFreeTradePetitions();
  return (
    <main>
      <div className='title-container'>
        <div>
          <h1 className='page-title title-h1'>Encontra con quien intercambiar tus <span className='h1-items'>skins</span> de CS:GO!</h1>
          <h2 className='page-title title-h2'>Con CS.Finder, podes buscar usuarios que deseen tu skin o crear tus propias solicitudes de intercambio personalizadas sin depositar nada.</h2>
        </div>
      <div className='thediv'>
        <img className='someImage' src='https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_ak47_cu_ak47_winter_sport_light_large.785a08aecd996dcffc6f38373fdc73697e601a6a.png'></img>
      </div>
      </div>
      <div className='last-petitions-title d-flex '>
        <SwapHorizIcon fontSize='large' className='swap-icon'></SwapHorizIcon>
        <h3>Peticiones de intercambio más recientes</h3>
      </div>
      {trade_petitions.content.map((tradePetition, index) => (
        <div className='trade-petition-border' key={index} >
          <TradePetitionComponent tradePetition={tradePetition} />
        </div>
      ))}
    </main>
  )
}
export default Home;
