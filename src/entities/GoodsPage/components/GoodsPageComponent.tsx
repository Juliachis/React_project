import React, { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { IGoods } from '../../../interfaces/IGoods';
import style from '../GoodsPage.module.scss';
import GoodCard from './GoodCard';
import GoodsSearch from './GoodsSearch';
import Pagination from './Pagination';

interface IProps {
  goodsDataAttr: IGoods[];
}

const GoodsPageComponent: FC<IProps> = ({ goodsDataAttr }) => {
  const navigate = useNavigate();

  return (
    <div className={style.goods_wrapper}>
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
      <div className={style.goods_divider} />
      <div className={style.search_container}>
        <GoodsSearch />
        <Pagination limit={8} itemsAmount={goodsDataAttr.length} currentPage={1} />
      </div>

      <div className={style.goods_list_header}>
        <p>Название объявления</p>
        <p>Категория</p>
        <p>Дата публикации</p>
        <p>Публикация</p>
      </div>

      {goodsDataAttr.length ? (
        goodsDataAttr.map((good) => {
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
