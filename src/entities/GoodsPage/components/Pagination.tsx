import React, { FC, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import style from '../GoodsPage.module.scss';

interface IProps {
  limit: number;
  itemsAmount: number;
}

const Pagination: FC<IProps> = ({ limit, itemsAmount }) => {
  const pagesAmount = Math.ceil(itemsAmount / limit);
  const pagesArray: number[] = [];

  const navigate = useNavigate();

  for (let i = 1; i <= pagesAmount; i++) {
    pagesArray.push(i);
  }

  const [currentPage, setCurrentPage] = useState(1);

  const lastCardNumber = currentPage * limit;
  const firstCardNumber = lastCardNumber - limit + 1;

  const nextPageToggle = () => {
    const pagesArrayLastEl = pagesArray[pagesArray.length - 1];

    setCurrentPage((prev) => (prev === pagesArrayLastEl ? prev : prev + 1));
  };

  const prevPageToggle = () => {
    setCurrentPage((prev) => (prev === 1 ? prev : prev - 1));
  };

  return (
    <div className={style.pagination_wrapper}>
      <p className={style.pagination_text}>{`${firstCardNumber} - ${
        currentPage === pagesArray[pagesArray.length - 1] ? itemsAmount : lastCardNumber
      } из ${itemsAmount}`}</p>
      <div className={style.buttons_wrapper}>
        <button
          type="button"
          className={style.button_prev}
          onClick={() => {
            prevPageToggle();
            navigate(`?page=${currentPage}`);
          }}>
          <div className={`${currentPage === 1 ? style.arrow_prev_disabled : style.arrow_prev}`} />
        </button>
        <button
          type="button"
          className={style.button_next}
          onClick={() => {
            nextPageToggle();
            navigate(`?page=${currentPage}`);
          }}>
          <div
            className={`${
              currentPage === pagesArray[pagesArray.length - 1]
                ? style.arrow_next_disabled
                : style.arrow_next
            }`}
          />
        </button>
      </div>
    </div>
  );
};

export default Pagination;
