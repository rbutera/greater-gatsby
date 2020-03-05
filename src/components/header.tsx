import PropTypes from "prop-types"
import React from "react"
import Logo from "./logo"

const Header: React.FunctionComponent = () => (
  <header>
    <Logo />
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
