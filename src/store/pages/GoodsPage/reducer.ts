import { IGoods } from '../../../interfaces/IGoods';
import { CREATE_GOOD, SET_GOODS_DATA } from './actions';
import { IGoodsState } from './interfaces';

const initialState: IGoodsState = {
  goodsData: [],
  loading: false,
  error: null,
};

export const GoodsReducer = (state: IGoodsState = initialState, action: any): IGoodsState => {
  switch (action.type) {
    case CREATE_GOOD:
      return { ...state, goodsData: [...state.goodsData, action.payload as IGoods] };
    case SET_GOODS_DATA:
      return { ...state, goodsData: action.payload as IGoods[] };
    default:
      return state;
  }
};
