import React from 'react';
import loader from '../../assets/img/loading.png'
import style from './loading.module.css';

export const Loading = () => (
<div data-test-id='loader' className={style.wrapper}>
    <img className={style.rot} src={loader} alt="loader" />
</div>);
