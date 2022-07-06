import React, { FC } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { mockedGoods } from '../../../mocks/mockedGoods';
import { createGoodAction } from '../../../store/pages/GoodsPage/actions';
import style from '../EditPage.module.scss';
import ArrowSvg from './ArrowSvg';

interface IProps {
  name: string;
  category: string;
}

const EditPageHeader: FC<IProps> = ({ name, category }) => {
  const dispatch = useDispatch();
  const now = new Date();
  //     const dateOptions = {
  //       year: 'numeric',
  // month: 'long',
  // day: 'numeric'
  //     }
  const dateNow = now.toLocaleDateString();
  // console.log(dateNow);
  const handleSaveBtnClick = () => {
    const newGood = {
      id: mockedGoods.length + 1,
      name,
      category,
      date: dateNow,
    };
    dispatch(createGoodAction(newGood));
  };
  return (
    <>
      <Link to="/goods_page" className={style.back_link}>
        <ArrowSvg />
        <span>Вернуться назад</span>
      </Link>
      <div className={style.edit_header}>
        <span>{name}</span>
        <button type="button" className={style.save_button} onClick={handleSaveBtnClick}>
          <Link to="/goods_page" className={style.button_back_link}>
            Сохранить
          </Link>
        </button>
      </div>
    </>
  );
};

export default EditPageHeader;
