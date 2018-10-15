const React = require("react");
const { connect } = require("react-redux");
const { createSelector } = require("reselect");
const PropTypes = require("prop-types");
const sidebarSelectors = require("../stores/selectors/sideBar");
const { withNamespaces } = require("react-i18next");
const logger = require("../utils/LoggerUtils");

class SideBar extends React.Component {
  static propTypes = {
    id: PropTypes.string,
    stateSelector: PropTypes.string
  };

  static defaultProps = {
    id: "sidebar-wrapper",
    items: [],
    stateSelector: "sidebar"
  };

  render() {
    logger.info("---------------Sidebar props", this.props);
    const { expanded, active } = this.props;
    return (
      <div id={this.props.id}>
        <ul className="sidebar-nav">
          <li className="sidebar-brand">
            <a href="#">Start Bootstrap</a>
          </li>
          <li>
            <a href="#">Dashboard</a>
          </li>
          <li>
            <a href="#">Shortcuts</a>
          </li>
          <li>
            <a href="#">Overview</a>
          </li>
          <li>
            <a href="#">Events</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Services</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      </div>
    );
  }
}

const selector = createSelector(
  [
    sidebarSelectors.sideBarExpandedSelector,
    sidebarSelectors.sideBarActiveSelector
  ],
  (expanded, active) => {
    return {
      expanded: expanded ? 1 : 0,
      active: active ? 1 : 0
    };
  }
);

const SideBarPlugin = connect(selector)(withNamespaces("sideBar")(SideBar));

// let's export the plugin and a set of required reducers
module.exports = {
  SideBar: SideBarPlugin,
  reducers: {
    sideBar: require("../stores/reducers/sideBar")
  }
};
