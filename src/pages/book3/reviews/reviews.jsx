import React from 'react';
import star from '../../../assets/img/books/star.png';
import avatar from '../../../assets/img/books/avatar.png';
import style from './reviews.module.css';

export const Reviews = () => {
  console.log();
  return (
    <section className={style.wrapper}>
      <h5 className={style.title}>
        Отзывы <span className={style.count}>2</span>
      </h5>
      <div className={style.commentBox}>
        <div className={style.personBox}>
          <div className={style.person}>
            <img className={style.avatar} src={avatar} alt='avatar' />
            <div className={style.avatarTextBlock}>
              <p className={style.name}>Иван Иванов</p>
              <p className={style.date}>5 января 2019</p>
            </div>
          </div>
          <img className={style.star} src={star} alt='raiting' />
        </div>

        <div className={style.personBox}>
          <div className={style.person}>
            <img className={style.avatar} src={avatar} alt='avatar' />
            <div className={style.avatarTextBlock}>
              <p className={style.name}>Николай Качков</p>
              <p className={style.date}>20 июня 2018</p>
            </div>
          </div>
          <img className={style.star} src={star} alt='raiting' />
          <p className={style.comment}>
            Учитывая ключевые сценарии поведения, курс на социально-ориентированный национальный проект не оставляет
            шанса для анализа существующих паттернов поведения. Для современного мира внедрение современных методик
            предоставляет широкие возможности для позиций, занимаемых участниками в отношении поставленных задач. Как
            уже неоднократно упомянуто, сделанные на базе интернет-аналитики выводы будут в равной степени предоставлены
            сами себе. Вот вам яркий пример современных тенденций — глубокий уровень погружения создаёт предпосылки для
            своевременного выполнения сверхзадачи. И нет сомнений, что акционеры крупнейших компаний, инициированные
            исключительно синтетически, превращены в посмешище, хотя само их существование приносит несомненную пользу
            обществу.
          </p>
        </div>

        <div className={style.personBox}>
          <div className={style.person}>
            <img className={style.avatar} src={avatar} alt='avatar' />
            <div className={style.avatarTextBlock}>
              <p className={style.name}>Екатерина Беляева</p>
              <p className={style.date}>18 февраля 2018</p>
            </div>
          </div>
          <img className={style.star} src={star} alt='raiting' />
        </div>
      </div>
      <button type='button' className={style.btn}>
        ОЦЕНИТЬ КНИГУ
      </button>
    </section>
  );
};
