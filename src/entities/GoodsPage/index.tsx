import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { IGoods } from '../../interfaces/IGoods';
import { mockedGoods } from '../../mocks/mockedGoods';
import { setGoodsDataAction } from '../../store/pages/GoodsPage/actions';
import { getGoodsData } from '../../store/pages/GoodsPage/selectors';
import GoodsPageComponent from './components/GoodsPageComponent';
import Loader from './components/Loader';
import style from './GoodsPage.module.scss';

const GoodsPage = () => {
  const dispatch = useDispatch();
  const goodsData = useSelector(getGoodsData);

  const { pathname, search } = useLocation();
  const navigate = useNavigate();

  // const [goodsData, setGoodsData] = useState<IGoods[] | null>(null);

  setTimeout(() => {
    dispatch(setGoodsDataAction(mockedGoods));
    // setGoodsData(mockedGoods);
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
