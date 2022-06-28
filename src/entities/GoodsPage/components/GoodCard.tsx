import React, { FC } from 'react';
import style from '../GoodsPage.module.scss';
import GoodsPageSvgSelector from './GoodsPageSvgSelector';

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
          <div className={style.popup_wrapper}>
            <ul className={style.popup_list}>
              <li className={style.popup_list_item}>
                <GoodsPageSvgSelector id="eye" />
                <p className={style.popup_list_link}>Просмотреть</p>
              </li>
              <li className={style.popup_list_item}>
                <GoodsPageSvgSelector id="edit" />
                <p className={style.popup_list_link}>Редактировать</p>
              </li>
              <li className={style.popup_list_item}>
                <GoodsPageSvgSelector id="recycle_bin" />
                <p className={style.popup_list_link}>Удалить</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GoodCard;
