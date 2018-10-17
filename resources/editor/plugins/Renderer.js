const React = require("react");
const PropTypes = require("prop-types");
const { connect } = require("react-redux");
const { createSelector } = require("reselect");
const assign = require("object-assign");
const rendererActions = require("../stores/actions/renderer");
const { rendererTypeSelector } = require("../stores/selectors/renderer");

let plugins;

class Renderer extends React.Component {
  render() {
    this.updatePlugins(this.props);
    return (
      <React.Fragment>
        {<plugins.Renderer>{this.props.type}</plugins.Renderer>}
        <button onClick={() => this.props.changeTypeHandler("html5")}>
          ChangeType html5
        </button>
        <button onClick={() => this.props.changeTypeHandler("fabricjs")}>
          ChangeType fabricjs
        </button>
      </React.Fragment>
    );
  }

  updatePlugins = props => {
    return (plugins = require("./Renderer/index")(props.type));
  };
}

Renderer.propTypes = {
  type: PropTypes.string
};

Renderer.defaultProps = {
  type: "fabricjs"
};

// let's export the plugin and a set of required reducers

const selector = createSelector([rendererTypeSelector], rendererType => {
  return {
    type: rendererType
  };
});

const mapDispatchToProps = dispatch => {
  return {
    changeTypeHandler: type =>
      dispatch(rendererActions.changeRendererType(type))
  };
};

const RendererPlugin = connect(
  selector,
  mapDispatchToProps
)(Renderer);

module.exports = {
  Renderer: assign(RendererPlugin),
  reducers: { renderer: require("../stores/reducers/renderer") }
};
