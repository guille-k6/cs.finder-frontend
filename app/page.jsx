import Image from 'next/image'
import SomeComponent from './someRoute/someComponent'
import TradePetitionComponent from './components/tradePetitionComponent/TradePetitionComponent';



async function getFreeTradePetitions(){
  try{
    const response = await fetch('http://localhost:8080/api/trade_petitions_unlogged');
    const trade_petitions = await response.json();
    console.log(trade_petitions.content[3]);
    return trade_petitions;
  }catch(error){
    return error.json();
  }
}

async function Home() {

  const trade_petitions = await getFreeTradePetitions();
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <p>Let's suppose for now that this is the skins page</p>
      <SomeComponent></SomeComponent>
      {trade_petitions.content.map((tradePetition, index) => (
        <TradePetitionComponent key={index} tradePetition={tradePetition} />
      ))}
    </main>
  )
}
export default Home;
