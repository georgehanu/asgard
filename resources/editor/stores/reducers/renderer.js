const actionTypes = require("../actionTypes/renderer");
const { handleAction } = require("redux-actions");
const reduceReducers = require("reduce-reducers").default;

console.log("reduceReducers", reduceReducers);

const initialState = {
  type: "fabricjs"
};

const changeRendererReducer = handleAction(
  actionTypes.CHANGE_RENDERER_TYPE,
  (state, action) => {
    return {
      ...state,
      type: action.payload
    };
  },
  initialState
);

const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

module.exports = reduceReducers(mainReducer, changeRendererReducer);
