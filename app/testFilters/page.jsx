'use client'
import React, { useEffect, useState } from 'react';
import TradePetitionComponent from '../components/tradePetitionComponent/TradePetitionComponent';
import SwapHorizIcon from '@mui/icons-material/SwapHoriz';



async function getFreeTradePetitions(){
  try{
    const response = await fetch('http://localhost:8080/api/trade_petitions_unlogged');
    const trade_petitions = await response.json();
    console.log('pase por la function');
    return trade_petitions;
    
  }catch(error){
    return console.log(error);
  }
}


const TestFilters = ( ) => {

  const [loading, setLoading] = useState(true);
  const [trade_petitions, setTrade_petitions] = useState({});

  async function aplicarFiltro(){
    const token = ''; // Replace 'xxxx' with your actual Bearer token
  
    const requestOptions = {
      method: 'GET', // Adjust the HTTP method as needed (GET, POST, etc.)
      headers: {
        'Authorization': `Bearer ${token}`,
      },
    };
    
  
    try{
      const response = await fetch('http://localhost:8080/api/trade_petitions?search_type=petition&item_type=skin&weapon=Karambit', requestOptions);
      const trade_petitions = await response.json();
      setTrade_petitions(trade_petitions);
      console.log('pase por la function');
      
    }catch(error){
      return console.log(error);
    }
  }

  async function limpiarFiltro(){
    try{
      const response = await fetch('http://localhost:8080/api/trade_petitions_unlogged');
      const trade_petitions = await response.json();
      setTrade_petitions(trade_petitions);
      console.log('intente limpiar el filtro');
      
    }catch(error){
      return console.log(error);
    }
  }

  useEffect(() => {
    // Create an inner async function and immediately invoke it
    (async () => {
      try {
        const fetchedTradePetitions = await getFreeTradePetitions();
        setTrade_petitions(fetchedTradePetitions);
        console.log(fetchedTradePetitions);
      } catch (error) {
        // Handle any errors that occurred during the fetch
        console.error(error);
      }finally{
        setLoading(false);
      }
    })();
  }, []);


  return (
    <>
      {loading ? (
        <div>Cargando...</div>
      ) : (
        <div className='last-petitions-title d-flex '>
          <SwapHorizIcon fontSize='large' className='swap-icon'></SwapHorizIcon>
          <h3>Peticiones de intercambio más recientes</h3>
          <button onClick={aplicarFiltro}>Aplicar filtro</button>
          <button onClick={limpiarFiltro}>Limpiar filtro</button>
        </div>
      )}
  
      {!loading &&
        trade_petitions.content.map((tradePetition, index) => (
          <div className='trade-petition-border' key={index}>
            <TradePetitionComponent tradePetition={tradePetition} />
          </div>
        ))}
    </>
  );
}
export default TestFilters;