import style from './zerobookinput.module.css';

export const ZerobookInput = () => (
  <div key={Math.random()} className={style.wrapper}>
    <h3 data-test-id='search-result-not-found' className={style.text}>
      По запросу ничего не найдено
    </h3>
  </div>
);
