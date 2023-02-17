import style from './detailed.module.css';

export const Detailed = () => {
  console.log();
  return (
    <section className={style.wrapper}>
      <h5 className={style.title}>Подробная информация</h5>
      <div className={style.detailed}>
        <div className={style.group1}>
          <div className={style.groupText}>
            <div className={style.boxStrong}>
              <h6 className={style.strong}>Издательство</h6>
            </div>
            <div className={style.boxSkinny}>
              <p className={style.skinny}>Питер</p>
            </div>
          </div>
          <div className={style.groupText}>
            <div className={style.boxStrong}>
              <h6 className={style.strong}>Год издания</h6>
            </div>
            <div className={style.boxSkinny}>
              <p className={style.skinny}>2019</p>
            </div>
          </div>
          <div className={style.groupText}>
            <div className={style.boxStrong}>
              <h6 className={style.strong}>Страниц</h6>
            </div>
            <div className={style.boxSkinny}>
              <p className={style.skinny}>288</p>
            </div>
          </div>
          <div className={style.groupText}>
            <div className={style.boxStrong}>
              <h6 className={style.strong}>Переплёт</h6>
            </div>
            <div className={style.boxSkinny}>
              <p className={style.skinny}>Мягкая обложка</p>
            </div>
          </div>
          <div className={style.groupText}>
            <div className={style.boxStrong}>
              <h6 className={style.strong}>Формат</h6>
            </div>
            <div className={style.boxSkinny}>
              <p className={style.skinny}>70х100</p>
            </div>
          </div>
        </div>
        <div className={style.group2}>
        <div className={style.groupText}>
            <div className={style.boxStrong}>
              <h6 className={style.strong}>Жанр</h6>
            </div>
            <div className={style.boxSkinny}>
              <p className={style.skinny}>Компьютерная литература</p>
            </div>
          </div>
          <div className={style.groupText}>
            <div className={style.boxStrong}>
              <h6 className={style.strong}>Возрастные ограничения</h6>
            </div>
            <div className={style.boxSkinny}>
              <p className={style.skinny}>16+</p>
            </div>
          </div>
          <div className={style.groupText}>
            <div className={style.boxStrong}>
              <h6 className={style.strong}>Вес</h6>
            </div>
            <div className={style.boxSkinny}>
              <p className={style.skinny}>370 г</p>
            </div>
          </div>
          <div className={style.groupText}>
            <div className={style.boxStrong}>
              <h6 className={style.strong}>ISBN</h6>
            </div>
            <div className={style.boxSkinny}>
              <p className={style.skinny}>978-5-4461-0923-4</p>
            </div>
          </div>
          <div className={style.groupText}>
            <div className={style.boxStrong}>
              <h6 className={style.strong}>Изготовитель</h6>
            </div>
            <div className={style.boxSkinny}>
              <p className={style.skinny}>
                {' '}
                ООО «Питер Мейл». РФ, 198206, г.Санкт-Петербург, Петергофское ш, д. 73, лит. А29
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
