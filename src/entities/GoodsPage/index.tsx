import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { IGoods } from '../../interfaces/IGoods';
import { mockedGoods } from '../../mocks/mockedGoods';
import GoodsPageComponent from './components/GoodsPageComponent';
import Loader from './components/Loader';
import style from './GoodsPage.module.scss';

const GoodsPage = () => {
  const { pathname, search } = useLocation();
  const navigate = useNavigate();

  const [goodsData, setGoodsData] = useState<IGoods[] | null>(null);

  setTimeout(() => {
    setGoodsData(mockedGoods);
  }, 1500);

  useEffect(() => {
    if (pathname === '/') {
      navigate('/goods_page');
    }
    if (!search) {
      navigate('?page=1');
    }
  }, [pathname, navigate, search]);

  return !goodsData ? <Loader /> : <GoodsPageComponent goodsDataAttr={goodsData} />;
};

export default GoodsPage;
