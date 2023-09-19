import css from './moneyPetitionComponent.css';
import LocalAtmIcon from '@mui/icons-material/LocalAtm';

function MoneyPetitionComponent(moneyPetition) {
    const {amount, country_code} = moneyPetition.moneyPetition;
  return (
    <div className='money-petition-container'>
        <LocalAtmIcon className='money-icon'></LocalAtmIcon>
        <p>{amount}</p>
        <p className='money-country-code'>{country_code}</p>
    </div>
  )
}

export default MoneyPetitionComponent