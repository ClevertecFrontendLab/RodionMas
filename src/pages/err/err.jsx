import { useState } from 'react';
import warning from '../../assets/img/err/WarningCircle.png';
import close from '../../assets/img/err/Icon_Action.png';
import style from './err.module.css';

export const Err = () => {
  const [closeErr, setCloseErr] = useState(false)
  return (
    <div data-test-id='error' className={closeErr === false ? style.wrapper : style.hide}>
      <div className={style.wrarningBlock}>
        {' '}
        <img src={warning} alt='warning' />
        <h4>Что-то пошло не так. Обновите страницу через некоторое время.</h4>
      </div>
      <button onClick={() => setCloseErr(!closeErr)} className={style.btn} type='button'>
        <img src={close} alt='close' />
      </button>
    </div>
  );
};
