import React, { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { IGoods } from '../../../interfaces/IGoods';
import style from '../GoodsPage.module.scss';

interface IProps {
  goodsDataAttr: IGoods[];
}

const GoodsPageHeader: FC<IProps> = ({ goodsDataAttr }) => {
  const navigate = useNavigate();
  return (
    <div className={style.goods_header}>
      <div className={style.goods_header_name}>
        <p className={style.goods_header_title}>Объявления</p>
        <p className={style.goods_header_text}>{`Всего: ${goodsDataAttr.length}`}</p>
      </div>
      <div className={style.goods_header_button}>
        <button type="button" onClick={() => navigate('/edit_page')}>
          <div className={style.goods_header_button_inner}>
            <div className={style.goods_header_button_text}>Добавить</div>

            <div className={style.goods_header_button_sign}>+</div>
          </div>
        </button>
      </div>
    </div>
  );
};

export default GoodsPageHeader;
