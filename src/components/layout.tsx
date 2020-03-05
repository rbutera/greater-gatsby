/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import tw from "tailwind.macro"
import GlobalStyle from "../global-style"

import Header from "./header"
import "./layout.css"

const Footer = styled.footer`
  ${tw`my-10 text-center text-sm`}
`

const Layout: React.FunctionComponent = ({ children }) => {
  return (
    <>
      <GlobalStyle />
      <Header />
      <div>
        <main>{children}</main>
        <Footer>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a> +{" "}
          <a href="https://www.github.com/rbutera/greater-gatsby">
            greater-gatsby
          </a>
        </Footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
