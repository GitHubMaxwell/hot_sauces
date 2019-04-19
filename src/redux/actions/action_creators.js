import actions from './action_constants';

// Action Creators
export const loadSauces = payload => {
  return dispatch => {
    return dispatch({ type: actions.LOAD_SAUCES, payload });
  };
};
export const initLoad = () => {
  return dispatch => {
    return dispatch({ type: actions.INIT_LOAD });
  };
};

export const deleteSauce = payload => {
  return dispatch => {
    return dispatch({ type: actions.DELETE_SAUCE, payload });
  };
};

export const sauceDetails = payload => {
  return dispatch => {
    return dispatch({ type: actions.SAUCE_DETAILS, payload });
  };
};

export const addSauce = payload => {
  return dispatch => {
    return dispatch({ type: actions.ADD_SAUCE, payload });
  };
};

export const updateSauce = payload => {
  return dispatch => {
    return dispatch({ type: actions.UPDATE_SAUCE, payload });
  };
};

export const successOn = () => {
  return dispatch => {
    setTimeout(() => {
      return dispatch({ type: actions.SUCCESS_OFF });
    }, 3000);
    return dispatch({ type: actions.SUCCESS_ON });
  };
};

export const failedSubmit = () => {
  return dispatch => {
    setTimeout(() => {
      return dispatch({ type: actions.FAILED_SUBMIT_OFF });
    }, 4000);
    return dispatch({ type: actions.FAILED_SUBMIT_ON });
  };
};
