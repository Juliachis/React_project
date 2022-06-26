import React, { FC, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { IGoods } from '../../../interfaces/IGoods';
import style from '../GoodsPage.module.scss';
import GoodCard from './GoodCard';
import GoodsPageHeader from './GoodsPageHeader';
import GoodsSearch from './GoodsSearch';
import Pagination from './Pagination';

interface IProps {
  goodsDataAttr: IGoods[];
}

const GoodsPageComponent: FC<IProps> = ({ goodsDataAttr }) => {
  const { search } = useLocation();
  const pageLimit = 8;

  const [searchValue, setSearchValue] = useState('');
  const handleInputChange = (value: React.SetStateAction<string>) => {
    setSearchValue(value);
  };

  const filteredGoods = goodsDataAttr.filter((good) => {
    return good.name.toLowerCase().includes(searchValue.toLowerCase());
  });

  const currentPageNumber = new URLSearchParams(search).get('page');

  const paginatedUserData = filteredGoods.slice(
    (Number(currentPageNumber) - 1) * pageLimit,
    Number(currentPageNumber) * pageLimit
  );

  return (
    <div className={style.goods_wrapper}>
      <GoodsPageHeader goodsDataAttr={goodsDataAttr} />
      <div className={style.goods_divider} />
      <div className={style.search_container}>
        <GoodsSearch onChange={handleInputChange} />
        <Pagination limit={pageLimit} itemsAmount={filteredGoods.length} />
      </div>

      <div className={style.goods_list_header}>
        <p>Название объявления</p>
        <p>Категория</p>
        <p>Дата публикации</p>
        <p>Публикация</p>
      </div>

      {paginatedUserData.length ? (
        paginatedUserData.map((good) => {
          const { id, name, category, date } = good;
          return (
            <React.Fragment key={`GoodId:${id}`}>
              <GoodCard id={id} name={name} category={category} date={date} />
            </React.Fragment>
          );
        })
      ) : (
        <div>Товары не найдены</div>
      )}
    </div>
  );
};

export default GoodsPageComponent;
