import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { mockedGoods } from '../../mocks/mockedGoods';
import GoodsPageComponent from './components/GoodsPageComponent';
import style from './GoodsPage.module.scss';

const GoodsPage = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (pathname === '/') {
      navigate('/goods_page');
    }
  }, [pathname, navigate]);

  return <GoodsPageComponent goodsDataAttr={mockedGoods} />;
};

export default GoodsPage;
