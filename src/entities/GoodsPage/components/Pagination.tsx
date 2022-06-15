import React from 'react';
import style from '../GoodsPage.module.scss';

const Pagination = () => {
  return (
    <div className={style.pagination_wrapper}>
      <p className={style.pagination_text}>1-8 из 45</p>
      <div className={style.buttons_wrapper}>
        <button type="button" className={style.button_prev}>
          <div className={style.arrow_prev} />
        </button>
        <button type="button" className={style.button_next}>
          <div className={style.arrow_next} />
        </button>
      </div>
    </div>
  );
};

export default Pagination;
