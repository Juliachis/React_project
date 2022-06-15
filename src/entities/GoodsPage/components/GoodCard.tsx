import React, { FC } from 'react';
import style from '../GoodsPage.module.scss';

interface IProps {
  id: number;
  name: string;
  category: string;
  date: string;
}

const GoodCard: FC<IProps> = ({ id, name, category, date }) => {
  return (
    <div className={style.good_item}>
      <p>{name}</p>
      <p>{category}</p>
      <p>{date}</p>
      <div className={style.good_item_wrapper}>
        <p>Да</p>
        <div className={style.menu_button}>
          <span />
        </div>
      </div>
    </div>
  );
};

export default GoodCard;
