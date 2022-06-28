import React from 'react';
import FooterHeaderSvgSelector from '../FooterHeaderSvgSelector';
import style from './Header.module.scss';

const Header = () => {
  return (
    <header>
      <div className={style.container}>
        <div className={style.header_logo}>
          <FooterHeaderSvgSelector id="logo" />
          <p className={style.header_logo_text}>Стикер</p>
        </div>
        <div className={style.header_profile}>
          <FooterHeaderSvgSelector id="profile_logo" />
          <p className={style.header_profile_text}>Профиль</p>
        </div>
      </div>
    </header>
  );
};

export default Header;
