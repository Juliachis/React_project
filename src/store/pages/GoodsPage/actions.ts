import { IGoods } from '../../../interfaces/IGoods';
import { ICreateGoodAction } from './interfaces';

export const SET_GOODS_DATA = 'SET_GOODS_DATA';

export const setGoodsDataAction = (payload: IGoods[]) => {
  return { type: SET_GOODS_DATA, payload };
};

export const CREATE_GOOD = 'CREATE_GOOD';

export const createGoodAction = (payload: IGoods): ICreateGoodAction => {
  return { type: CREATE_GOOD, payload };
};
