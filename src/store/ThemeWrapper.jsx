import PropTypes from "prop-types";

const ThemeWrapper = ({ themeMode, children }) => {
  const themeClass = themeMode === "light" ? "theme-light" : "theme-dark";

  return <div className={themeClass}>{children}</div>;
};

ThemeWrapper.propTypes = {
  children: PropTypes.node.isRequired,
  themeMode: PropTypes.string,
};

export default ThemeWrapper;
