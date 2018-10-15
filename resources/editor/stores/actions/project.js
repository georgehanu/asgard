const { CHANGE_PROJECT_TITLE, ADD_OBJECT } = require("../actionTypes/project");
const { createActions } = require("redux-actions");

const { changeProjectTitle, addObject } = createActions(
  CHANGE_PROJECT_TITLE,
  ADD_OBJECT
);

{
  changeProjectTitle, addObject;
}
