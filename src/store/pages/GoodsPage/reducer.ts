import { SET_GOODS_DATA } from './actions';
import { IGoodsState } from './interfaces';

const initialState: IGoodsState = {
  goodsData: [],
  loading: false,
  error: null,
};

export const GoodsReducer = (state: IGoodsState = initialState, action: any): IGoodsState => {
  switch (action.type) {
    case SET_GOODS_DATA:
      return { ...state, goodsData: action.payload };
    default:
      return state;
  }
};
