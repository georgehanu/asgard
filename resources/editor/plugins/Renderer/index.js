const { connect } = require("react-redux");
const { createSelector } = require("reselect");
const { rendererTypeSelector } = require("../../stores/selectors/renderer");

module.exports = renderType => {
  const components = require("./" + renderType + "/index");

  const selector = createSelector([rendererTypeSelector], rendererType => {
    return {
      type: rendererType
    };
  });
  const Renderer = connect(selector)(components.Renderer);

  return {
    Renderer: Renderer
  };
};
