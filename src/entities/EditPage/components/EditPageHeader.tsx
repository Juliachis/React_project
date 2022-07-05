import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import style from '../EditPage.module.scss';
import ArrowSvg from './ArrowSvg';

interface IProps {
  name: string;
  category: string;
}

const EditPageHeader: FC<IProps> = ({ name, category }) => {
  return (
    <>
      <Link to="/goods_page" className={style.back_link}>
        <ArrowSvg />
        <span>Вернуться назад</span>
      </Link>
      <div className={style.edit_header}>
        <span>{name}</span>
        <button type="button" className={style.save_button}>
          Сохранить
        </button>
      </div>
    </>
  );
};

export default EditPageHeader;
