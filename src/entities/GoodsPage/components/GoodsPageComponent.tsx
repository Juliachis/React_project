import React from 'react';
import style from '../GoodsPage.module.scss';
import GoodsSearch from './GoodsSearch';

const GoodsPageComponent = () => {
  return (
    <div className={style.goods_wrapper}>
      <div className={style.goods_header}>
        <div className={style.goods_header_name}>
          <p className={style.goods_header_title}>Объявления</p>
          <p className={style.goods_header_text}>Всего: 45</p>
        </div>
        <div className={style.goods_header_button}>
          <button type="button">
            <div className={style.goods_header_button_inner}>
              <div className={style.goods_header_button_text}>Добавить</div>

              <div className={style.goods_header_button_sign}>+</div>
            </div>
          </button>
        </div>
      </div>
      <div className={style.goods_divider} />
      <GoodsSearch />
    </div>
  );
};

export default GoodsPageComponent;
