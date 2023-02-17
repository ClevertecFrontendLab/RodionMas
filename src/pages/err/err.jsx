import warning from '../../assets/img/err/WarningCircle.png';
import close from '../../assets/img/err/Icon_Action.png'
import style from './err.module.css';
import { closeErr } from '../../store/bookslice';

export const Err = ({dispatch}) => (
  <div data-test-id='error' className={style.wrapper}>
    <div className={style.wrarningBlock}>
      {' '}
      <img src={warning} alt='warning' />
      <h4>Что-то пошло не так. Обновите страницу через некоторое время.</h4>
    </div>
    <button onClick={() => dispatch(closeErr())} className={style.btn} type='button'>
        <img src={close} alt="close" />
    </button>
  </div>
);
