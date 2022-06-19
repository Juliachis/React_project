import React, { FC, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import style from '../GoodsPage.module.scss';

interface IProps {
  limit: number;
  itemsAmount: number;
  currentPage: number;
}

const Pagination: FC<IProps> = ({ limit, itemsAmount, currentPage }) => {
  const pagesAmount = Math.ceil(itemsAmount / limit);
  const pagesArray: number[] = [];

  const navigate = useNavigate();

  for (let i = 1; i <= pagesAmount; i++) {
    pagesArray.push(i);
  }

  const [togglePage, setTogglePage] = useState(1);

  const lastCardNumber = togglePage * limit;
  const firstCardNumber = lastCardNumber - limit + 1;

  const nextPageToggle = () => {
    const pagesArrayLastIndex = pagesArray.length - 1;
    if (togglePage !== pagesArray[pagesArrayLastIndex]) {
      setTogglePage(pagesArray[pagesArray.indexOf(togglePage) + 1]);
    }
    return navigate(`?page=${togglePage}`);
  };

  // const prevPageToggle = () => {
  //   if (togglePage !== pagesArray[0]) {
  //     setTogglePage(pagesArray[pagesArray.indexOf(togglePage) - 1]);
  //   }
  //   return navigate(`?page=${togglePage}`);
  // };

  return (
    <div className={style.pagination_wrapper}>
      <p
        className={
          style.pagination_text
        }>{`${firstCardNumber} - ${lastCardNumber} из ${itemsAmount}`}</p>
      <div className={style.buttons_wrapper}>
        <button type="button" className={style.button_prev}>
          <div className={style.arrow_prev} />
        </button>
        <button type="button" className={style.button_next} onClick={nextPageToggle}>
          <div className={style.arrow_next} />
        </button>
      </div>
    </div>
  );
};

export default Pagination;
