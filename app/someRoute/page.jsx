import TradePetitionComponent from "../components/tradePetitionComponent/TradePetitionComponent";


/*
  Ejemplo de como usar componentes del lado del servidor para filtrar
*/

async function tryFetch(obj) {
    if(obj.valor === 'busca'){
      try{
        const response = await fetch('http://localhost:8080/api/trade_petitions_unlogged');
        const trade_petitions = await response.json();
        return trade_petitions;
        
      }catch(error){
        return error;
      }
    }
}

async function someComponent({ searchParams }) {
  let peticiones = [];
  try {
    peticiones = await tryFetch(searchParams);
  } catch (error) {
    console.error(error);
  }

  return (
    <>
      {peticiones.content.map((tradePetition, index) => (
        <div className='trade-petition-border' key={index} >
          <TradePetitionComponent tradePetition={tradePetition} />
        </div>
      ))}
    </>
  )
}

export default someComponent;