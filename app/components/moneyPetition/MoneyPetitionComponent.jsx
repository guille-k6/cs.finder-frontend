import css from './moneyPetitionComponent.css';

function MoneyPetitionComponent(moneyPetition) {
    const {amount, country_code} = moneyPetition.moneyPetition;
  return (
    <div className='money-petition-container'>
        <p>{amount}</p>
        <p>{country_code}</p>
    </div>
  )
}

export default MoneyPetitionComponent