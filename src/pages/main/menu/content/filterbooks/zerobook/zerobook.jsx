import style from './zerobook.module.css'

export const ZerobookCategory = () => (
        <div className={style.wrapper}>
            <h3 data-test-id='empty-category' className={style.text}>В этой категории книг ещё нет</h3>
        </div>
    );


