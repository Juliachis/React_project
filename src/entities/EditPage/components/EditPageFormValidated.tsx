import React, { useState } from 'react';
import style from '../EditPage.module.scss';

const EditPageFormValidated = () => {
  const [phone, setPhone] = useState('');
  const [text, setText] = useState('');
  const [phoneDirty, setPhoneDirty] = useState(false);
  const [textDirty, setTextDirty] = useState(false);
  const [phoneError, setPhoneError] = useState('Поле не может быть пустым');
  const [textError, setTextError] = useState('Поле не может быть пустым');

  const blurHandler = (
    event:
      | React.FocusEvent<HTMLInputElement, Element>
      | React.FocusEvent<HTMLTextAreaElement, Element>
  ) => {
    switch (event.target.name) {
      case 'phone':
        setPhoneDirty(true);
        break;
      case 'text':
        setTextDirty(true);
        break;
      default:
        setPhoneDirty(false);
    }
  };

  const phoneHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPhone(event.target.value);
    const regExPhone = /(\+7)[\s(](\d{3})[\s)](\d{3})[\s-](\d{2})[\s-](\d{2})/g;
    if (!regExPhone.test(String(event.target.value)) && event.target.value.length > 0) {
      setPhoneError('Неверный номер');
    } else if (!event.target.value) {
      setPhoneError('Поле не может быть пустым');
    } else setPhoneError('');
  };

  const textHandler = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(event.target.value);
    if (event.target.value.length > 3000) {
      setTextError('Вы превысили допустимое количество символов');
    } else if (!event.target.value) {
      setTextError('Поле не может быть пустым');
    } else {
      setPhoneError('');
    }
  };

  return (
    <>
      <label htmlFor="goodphone"> Телефон</label>
      <input
        onChange={(e) => phoneHandler(e)}
        value={phone}
        onBlur={(e) => blurHandler(e)}
        name="phone"
        type="tel"
        id="goodphone"
        placeholder="+7 (_ _ _) _ _ _ - _ _ - _ _"
        className={`${phoneDirty && phoneError ? style.form_phone_error : style.form_phone}`}
      />
      {phoneDirty && phoneError && <div className={style.error_msg}>{phoneError}</div>}
      <label htmlFor="goodtext"> Описание</label>
      <textarea
        onChange={(e) => textHandler(e)}
        value={text}
        onBlur={(e) => blurHandler(e)}
        name="text"
        id="goodtext"
        placeholder="Введите текст (до 3000 символов)"
        className={`${textDirty && textError ? style.textarea_error : ''}`}
      />
      {textDirty && textError && <div className={style.error_msg_text}>{textError}</div>}
    </>
  );
};

export default EditPageFormValidated;
