import React from 'react';
import style from '../EditPage.module.scss';
import EditPageHeader from './EditPageHeader';

const EditPageComponent = () => {
  return (
    <div className={style.edit_wrapper}>
      <EditPageHeader />
      <div className={style.form_wrapper}>
        <form>
          <label htmlFor="goodname"> Название товара</label>
          <input type="text" id="goodname" />
        </form>
      </div>
    </div>
  );
};

export default EditPageComponent;
