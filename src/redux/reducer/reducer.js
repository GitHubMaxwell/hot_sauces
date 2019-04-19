import actions from '../actions/action_constants';

// Initial State
let initialState = {
  list: [],
  selected: {},
  success: null,
  initLoad: true
};

// Reducer
export default (state = initialState, action) => {
  let { type, payload } = action;

  switch (type) {
    case actions.LOAD_SAUCES:
      return { ...state, ...(state.list = [...payload]) };

    case actions.INIT_LOAD:
      return { ...state, ...(state.initLoad = false) };

    case actions.UPDATE_SAUCE:
      let oldState = state.list;
      oldState.forEach(ele => {
        if (ele.id == payload.target) {
          ele.imageURL = payload.image;
        }
      });
      return { ...state, ...(state.list = oldState) };

    case actions.DELETE_SAUCE:
      let newList = state.list;
      newList.forEach((ele, i) => {
        if (ele.id == payload) {
          newList.splice(i, 1);
        }
      });
      return { ...state, ...(state.list = [...newList]) };

    case actions.SAUCE_DETAILS:
      let selectedSauce = {};
      state.list.forEach((ele, i) => {
        if (ele.id == payload) {
          selectedSauce = { ...state.list[i] };
        }
      });
      return { ...state, ...(state.selected = selectedSauce) };

    case actions.ADD_SAUCE:
      let addedList = state.list;
      addedList.push(payload);
      return { ...state, ...(state.list = [...addedList]) };

    case actions.SUCCESS_ON:
      return { ...state, ...(state.success = 'success') };

    case actions.SUCCESS_OFF:
      return { ...state, ...(state.success = null) };

    case actions.FAILED_SUBMIT_ON:
      return { ...state, ...(state.success = 'failed') };

    case actions.FAILED_SUBMIT_OFF:
      return { ...state, ...(state.success = null) };

    default:
      return state;
  }
};
