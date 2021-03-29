import {
  LOGIN_USER,
  REGISTER_USER,
  ADD_CREDIT,
  BUY_HOUSE,
  FILTER_HOUSE,
  AUTH_USER,
  ON_BUY_HOUSE,
} from '../constants/actionTypes';

export default (state = {}, action) => {
  switch (action.type) {
    case REGISTER_USER:
        return { ...state, register: action.payload }
    case LOGIN_USER:
        return { ...state, login: action.payload }
    case BUY_HOUSE:
        return { ...state, house: action.payload }
    case ADD_CREDIT:
        return { ...state, credit: action.payload}
    case FILTER_HOUSE:
        return { ...state, filterHouse: action.payload}
    case ON_BUY_HOUSE:
        return { ...state, credit: action.payload}
    case AUTH_USER:
        return { ...state, isLogin: action.payload}  
    default:
        return state;
  }
};

