import React from 'react';
import style from '../GoodsPage.module.scss';

const GoodsSearch = () => {
  return (
    <form>
      <input type="text" placeholder="Найти объявление" />
      <button type="submit" className={style.search_button}>
        <img src="./img/search_logo.svg" alt="" />
      </button>
    </form>
  );
};

export default GoodsSearch;
