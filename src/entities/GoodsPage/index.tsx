import React from 'react';
import { mockedGoods } from '../../mocks/mockedGoods';
import GoodsPageComponent from './components/GoodsPageComponent';
import style from './GoodsPage.module.scss';

const GoodsPage = () => {
  return <GoodsPageComponent goodsDataAttr={mockedGoods} />;
};

export default GoodsPage;
