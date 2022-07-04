import { IGoods } from '../../../interfaces/IGoods';

export const SET_GOODS_DATA = 'SET_GOODS_DATA';

export const setGoodsDataAction = (payload: IGoods[]) => {
  return { type: SET_GOODS_DATA, payload };
};
