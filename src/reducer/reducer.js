// Action Constants
const LOAD_SAUCES = 'LOAD_SAUCES';
const DELETE_SAUCE = 'DELETE_SAUCE';
const SAUCE_DETAILS = 'SAUCE_DETAILS';
const ADD_SAUCE = 'ADD_SAUCE';
const SUCCESS_ON = 'SUCCESS_ON';
const SUCCESS_OFF = 'SUCCESS_OFF';

// Action Creators
export const loadSauces = payload => {
  return dispatch => {
    return dispatch({ type: LOAD_SAUCES, payload });
  };
};

export const deleteSauce = payload => {
  return dispatch => {
    return dispatch({ type: DELETE_SAUCE, payload });
  };
};

export const sauceDetails = payload => {
  return dispatch => {
    return dispatch({ type: SAUCE_DETAILS, payload });
  };
};

export const addSauce = payload => {
  return dispatch => {
    return dispatch({ type: ADD_SAUCE, payload });
  };
};

export const successOn = () => {
  return dispatch => {
    setTimeout(() => {
      return dispatch({ type: SUCCESS_OFF });
    }, 6000);
    return dispatch({ type: SUCCESS_ON });
  };
};

// Initial State
let initialState = {
  list: [],
  selected: {},
  success: false
};

// Reducer
export default (state = initialState, action) => {
  let { type, payload } = action;

  switch (type) {
    case 'LOAD_SAUCES':
      return { ...state, ...(state.list = [...payload]) };

    case 'DELETE_SAUCE':
      state.list.forEach((ele, i) => {
        if (ele.id == payload) {
          state.list.splice(i, 1);
        }
      });
      return { ...state, ...(state.list = [...state.list]) };

    case 'SAUCE_DETAILS':
      let selectedSauce = {};
      state.list.forEach((ele, i) => {
        if (ele.id == payload) {
          selectedSauce = { ...state.list[i] };
        }
      });
      return { ...state, ...(state.selected = selectedSauce) };

    case 'ADD_SAUCE':
      state.list.push(payload);
      return { ...state, ...(state.list = [...state.list]) };

    case 'SUCCESS_ON':
      return { ...state, ...(state.success = true) };

    case 'SUCCESS_OFF':
      return { ...state, ...(state.success = false) };

    default:
      return state;
  }
};
