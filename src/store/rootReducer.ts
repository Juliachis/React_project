import { combineReducers } from 'redux';
import { GoodsReducer } from './pages/GoodsPage/reducer';

const reducers = {
  goods: GoodsReducer,
};

export const rootReducer = combineReducers(reducers);
