import { IGoods } from '../../../interfaces/IGoods';

export interface IGoodsState {
  goodsData: IGoods[];
  loading: boolean;
  error: string | null;
}

interface IBaseAction {
  type: string;
}

export interface ISetGoodsDataAction extends IBaseAction {
  payload: IGoods[];
}
