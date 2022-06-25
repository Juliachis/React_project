import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { mockedGoods } from '../../mocks/mockedGoods';
import GoodsPageComponent from './components/GoodsPageComponent';
import style from './GoodsPage.module.scss';

const GoodsPage = () => {
  const { pathname, search } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (pathname === '/') {
      navigate('/goods_page');
    }
    if (!search) {
      navigate('?page=1');
    }
  }, [pathname, navigate, search]);

  return <GoodsPageComponent goodsDataAttr={mockedGoods} />;
};

export default GoodsPage;
