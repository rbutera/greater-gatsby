/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import tw from 'twin.macro'
import GlobalStyle from '../../global-style'

import Navbar from './navbar'
import Footer from './footer'
import './layout.css'

const LayoutStyle = styled.div`
  ${tw`p-2 m-0 w-screen overflow-x-hidden`}
`

const Spacer = styled.div`
  ${tw`flex-1`}
`

const Main = styled.main`
  ${tw`max-w-xl m-auto`}
`

const Layout: React.FunctionComponent = ({children}) => {
  return (
    <>
      <GlobalStyle />
      <LayoutStyle>
        <Navbar />
        <Main>{children}</Main>
        <Spacer />
        <Footer />
      </LayoutStyle>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
