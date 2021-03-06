import { faCircleHalfStroke } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useDispatch } from 'react-redux';
import { changeLanguage } from '../redux/language';

function FeaturesHeader() {
  const dispatch = useDispatch();

  return (
    <nav className='features'>
      <button
        type='button'
        value='spanish'
        onClick={(e) => dispatch(changeLanguage(e.target.value))}
      >
        ES
      </button>
      <button
        type='button'
        value='english'
        onClick={(e) => dispatch(changeLanguage(e.target.value))}
      >
        EN
      </button>
      <button type='button'>
        <FontAwesomeIcon icon={faCircleHalfStroke} />
      </button>
    </nav>
  );
}

export default FeaturesHeader;
