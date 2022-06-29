import React from 'react';
import { Link } from 'react-router-dom';
import style from '../EditPage.module.scss';
import ArrowSvg from './ArrowSvg';

const EditPageHeader = () => {
  return (
    <>
      <Link to="/goods_page" className={style.back_link}>
        <ArrowSvg />
        <span>Вернуться назад</span>
      </Link>
      <div className={style.edit_header}>
        <span>Название товара</span>
        <button type="button" className={style.save_button}>
          Сохранить
        </button>
      </div>
    </>
  );
};

export default EditPageHeader;
