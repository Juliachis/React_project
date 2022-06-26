import React, { FC, useState } from 'react';
import style from '../GoodsPage.module.scss';

interface IProps {
  onChange: (arg0: React.SetStateAction<string>) => void;
}

const GoodsSearch: FC<IProps> = ({ onChange }) => {
  const handleInputChange = (event: { target: { value: React.SetStateAction<string> } }) => {
    onChange(event.target.value);
  };

  return (
    <form>
      <input type="text" placeholder="Найти объявление" onChange={handleInputChange} />
      <button type="submit" className={style.search_button}>
        <img src="./img/search_logo.svg" alt="" />
      </button>
    </form>
  );
};

export default GoodsSearch;
