import { Link } from 'react-router-dom';
import cn from 'classnames';
import style from './header.module.css';
import logo from '../../../assets/img/nav/logo.png';
import avatar from '../../../assets/img/nav/avatar.png';

export const Header = ({ toggleMenuMode, isMenuOpen, headerRef }) => (
  <header className={style.wrapper}>
    <div
      data-test-id='button-burger'
      ref={headerRef}
      role='presentation'
      onClick={() => {
        toggleMenuMode()
      }}
      className={cn('menu', { menuActive: isMenuOpen })}
    >
      <span />
    </div>
    <Link to='/' className={style.navLogo_text}>
      <img className={style.logo} src={logo} alt='logo' />
      <h3 className={style.nameOrganization}>Библиотека</h3>
    </Link>
    <div className={style.person}>
      <p>Привет, Иван!</p>
      <img src={avatar} alt='avatar' />
    </div>
  </header>
);
