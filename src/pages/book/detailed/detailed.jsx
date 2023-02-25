import style from './detailed.module.css';

export const Detailed = ({ pageBookId }) => (
    <section className={style.wrapper}>
      <h5 className={style.title}>Подробная информация</h5>
      {pageBookId !== null && (
        <div className={style.detailed}>
          <div className={style.group1}>
            <div className={style.groupText}>
              <div className={style.boxStrong}>
                <h6 className={style.strong}>Издательство</h6>
              </div>
              <div className={style.boxSkinny}>
                <p className={style.skinny}>{pageBookId.publish}</p>
              </div>
            </div>
            <div className={style.groupText}>
              <div className={style.boxStrong}>
                <h6 className={style.strong}>Год издания</h6>
              </div>
              <div className={style.boxSkinny}>
                <p className={style.skinny}>{pageBookId.issueYear}</p>
              </div>
            </div>
            <div className={style.groupText}>
              <div className={style.boxStrong}>
                <h6 className={style.strong}>Страниц</h6>
              </div>
              <div className={style.boxSkinny}>
                <p className={style.skinny}>{pageBookId.pages}</p>
              </div>
            </div>
            <div className={style.groupText}>
              <div className={style.boxStrong}>
                <h6 className={style.strong}>Переплёт</h6>
              </div>
              <div className={style.boxSkinny}>
                <p className={style.skinny}>{pageBookId.cover}</p>
              </div>
            </div>
            <div className={style.groupText}>
              <div className={style.boxStrong}>
                <h6 className={style.strong}>Формат</h6>
              </div>
              <div className={style.boxSkinny}>
                <p className={style.skinny}>{pageBookId.format}</p>
              </div>
            </div>
          </div>
          <div className={style.group2}>
            <div className={style.groupText}>
              <div className={style.boxStrong}>
                <h6 className={style.strong}>Жанр</h6>
              </div>
              <div className={style.boxSkinny}>
                <p className={style.skinny}>{pageBookId.categories}</p>
              </div>
            </div>
            <div className={style.groupText}>
              <div className={style.boxStrong}>
                <h6 className={style.strong}>Вес</h6>
              </div>
              <div className={style.boxSkinny}>
                <p className={style.skinny}>{pageBookId.weight} г</p>
              </div>
            </div>
            <div className={style.groupText}>
              <div className={style.boxStrong}>
                <h6 className={style.strong}>ISBN</h6>
              </div>
              <div className={style.boxSkinny}>
                <p className={style.skinny}>{pageBookId.ISBN}</p>
              </div>
            </div>
            <div className={style.groupText}>
              <div className={style.boxStrong}>
                <h6 className={style.strong}>Изготовитель</h6>
              </div>
              <div className={style.boxSkinny}>
                <p className={style.skinny}>{pageBookId.producer}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
