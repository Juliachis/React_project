import React, { useState } from 'react';
import style from '../EditPage.module.scss';
import EditPageForm from './EditPageForm';
import EditPageHeader from './EditPageHeader';

const EditPageComponent = () => {
  const [nameValue, setNameValue] = useState('');
  const [categoryValue, setCategoryValue] = useState('');

  const handleNameChange = (name: React.SetStateAction<string>) => setNameValue(name);

  const handleCategoryChange = (category: React.SetStateAction<string>) =>
    setCategoryValue(category);

  console.log(categoryValue);

  return (
    <div className={style.edit_wrapper}>
      <EditPageHeader name={nameValue} category={categoryValue} />
      <div className={style.form_wrapper}>
        <EditPageForm onNameChange={handleNameChange} onCategoryChange={handleCategoryChange} />
      </div>
    </div>
  );
};

export default EditPageComponent;
