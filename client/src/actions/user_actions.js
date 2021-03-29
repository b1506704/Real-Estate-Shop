import {
  LOGIN_USER,
  REGISTER_USER,
  ADD_CREDIT,
  BUY_HOUSE,
  FILTER_HOUSE,
  ON_BUY_HOUSE
} from '../constants/actionTypes';

import * as api from '../api/index.js';

export const login = (userInfo) => async (dispatch) => {
  try {
    dispatch({ type: LOGIN_USER, payload: userInfo});
    
  } catch (error) {
    console.log(error.message);
  }
};
export const register = (userInfo) => async (dispatch) => {
  try {
    const { data } = await api.createUser(userInfo);
    dispatch({ type: REGISTER_USER, payload: data});
  } catch (error) {
    console.log(error.message);
  }
};
export const addCredit = (creditInfo) => async (dispatch) => {
  try {
    dispatch({ type: ADD_CREDIT, payload: creditInfo});
  } catch (error) {
    console.log(error.message);
  }
};
export const buyHouse = (houseInfo) => async (dispatch) => {
  try {
    dispatch({ type: BUY_HOUSE, payload: houseInfo});
  } catch (error) {
    console.log(error.message);
  }
};
export const filterHouse = (filterName) => async (dispatch) => {
  try {
    dispatch({ type: FILTER_HOUSE, payload: filterName});
  } catch (error) {
    console.log(error.message);
  }
};

