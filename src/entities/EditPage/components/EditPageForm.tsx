import React, { FC, useState } from 'react';
import { mockedGoods } from '../../../mocks/mockedGoods';
import style from '../EditPage.module.scss';
import EditPageFormValidated from './EditPageFormValidated';

interface IProps {
  onNameChange: (arg0: React.SetStateAction<string>) => void;
  onCategoryChange: (arg0: React.SetStateAction<string>) => void;
}

const EditPageForm: FC<IProps> = ({ onNameChange, onCategoryChange }) => {
  const handleNameChange = (event: { target: { value: React.SetStateAction<string> } }) => {
    onNameChange(event.target.value);
  };

  const handleCategoryChange = (event: { target: { value: React.SetStateAction<string> } }) => {
    onCategoryChange(event.target.value);
  };

  const goodsCategory = mockedGoods.map((goodItem) => goodItem.category);
  const goodsCategoryUnique: string[] = [];
  for (let i = 0; i < goodsCategory.length; i++) {
    if (goodsCategoryUnique.indexOf(goodsCategory[i]) === -1) {
      goodsCategoryUnique.push(goodsCategory[i]);
    }
  }

  return (
    <form>
      <label htmlFor="goodname"> Название товара</label>
      <input
        type="text"
        id="goodname"
        placeholder="Введите название товара"
        className={style.form_name}
        onChange={handleNameChange}
      />
      <div className={style.input_wrapper}>
        <div>
          <label htmlFor="goodcategory"> Категория</label>
          <select name="category" id="goodcategory" onChange={handleCategoryChange}>
            {goodsCategoryUnique.map((category, id) => {
              return <option key={`key#${id + 1}`}>{category}</option>;
            })}
          </select>
        </div>
        <div>
          <label htmlFor="goodprice"> Стоимость</label>
          <input type="number" id="goodprice" placeholder="Введите стоимость товара" />
        </div>
      </div>
      <EditPageFormValidated />
      <label htmlFor="goodphoto"> Фотография</label>
      <input type="file" id="goodphoto" />
      {/* <label htmlFor="goodpublication"> Публикация</label>
      <input type="radio" name="publication" id="goodpublication" />
      Показать
      <input type="radio" name="publication" id="goodpublication" />
      Скрыть */}
    </form>
  );
};

export default EditPageForm;
