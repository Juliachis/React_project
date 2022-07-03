import React from 'react';
import style from '../EditPage.module.scss';
import EditPageForm from './EditPageForm';
import EditPageHeader from './EditPageHeader';

const EditPageComponent = () => {
  return (
    <div className={style.edit_wrapper}>
      <EditPageHeader />
      <div className={style.form_wrapper}>
        <EditPageForm />
      </div>
    </div>
  );
};

export default EditPageComponent;
