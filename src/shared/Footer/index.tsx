import React from 'react';
import style from './Footer.module.scss';

const Footer = () => {
  return (
    <footer>
      <div className={style.container}>
        <div className={style.footer_logo}>
          <div className={style.footer_logo_inner}>
            <img src="img/logo.jpg" alt="" />
            <p className={style.footer_logo_text}>Стикер</p>
          </div>
          <div className={style.footer_logo_divider} />
          <p className={style.footer_logo_name}>Доска объявлений</p>
        </div>
        <div className={style.footer_copyright}>&copy; ООО &quot;Доска диджитал &quot;, 2022</div>
      </div>
    </footer>
  );
};

export default Footer;
