import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import './Description.css';
import Human from './Human.svg';

const Description = () => {
  const companyInfo = useSelector((state)=>state.profile.companyInfo);
    const navigate = useNavigate();
  return (
      <div className='Description__block'>
        <div className='Description__leftBlock'>
          <h1 className='Description__title'>Сервис по поиску публикаций <br/> о компании <br/> по его инн
          </h1>
          <p className='Description__paragraph'>Комплексный анализ публикаций, получение данных в формате PDF на электронную почту.
          </p>
          {companyInfo && <button 
          className='RequestBtn'
          onClick={()=>navigate('/search')}>Запросить данные</button>}
        </div>
        <div className='Description__rightBlock'>
          <img className='Human' src={Human} alt='Human' />
        </div>
      </div>   
  )
}

export default Description
