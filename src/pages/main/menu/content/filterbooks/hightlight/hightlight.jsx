import style from './hightlight.module.css'

export const HightLight = (props) => {
    const { value, str } = props;
    if (!value) return str;
    const regexp = new RegExp(value, 'ig');
    const matchValue = str.match(regexp);
    if (matchValue) {
      return str.split(regexp).map((s, index, array) => {
        if (index < array.length - 1) {
          const c = matchValue.shift();
          return (
            <span key={Math.random()}>
              {s}
              <span data-test-id='highlight-matches' className={style.hightLight}>{c}</span>
            </span>
          );
        }
        return s;
      });
    }
    return str;
  };

