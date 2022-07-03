import React, { useState } from 'react';
import { mockedGoods } from '../../../mocks/mockedGoods';
import style from '../EditPage.module.scss';
import EditPageFormValidated from './EditPageFormValidated';

const EditPageForm = () => {
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
      />
      <div className={style.input_wrapper}>
        <div>
          <label htmlFor="goodcategory"> Категория</label>
          <select name="category" id="goodcategory">
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
