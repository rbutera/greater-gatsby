import React from 'react'
import Layout from '../components/layout/layout'
import SEOData from '../components/seo'
import styled from 'styled-components'
import tw from 'twin.macro'
import Logo from '../components/layout/logo'
import GetStarted from '../components/index/get-started'
import Features from '../components/index/features'

const Anchor = styled.a`
  ${tw`font-bold text-blue-600 hover:text-blue-300 mx-1`}
`

const IndexStyle = styled.div`
  > section {
    ${tw`my-4`}
  }
`

const IndexPage: React.FunctionComponent = () => (
  <Layout>
    <SEOData title="Home" />
    <IndexStyle>
      <Logo />
      <h1>Thanks for trying greater-gatsby!</h1>
      <Features />
      <GetStarted />
      <p>
        This starter was created by
        <Anchor href="https://github.com/rbutera">Rai Butera (rbutera)</Anchor>
        of <Anchor href="https://rstlss.org">RSTLSS.org</Anchor>{' '}
      </p>
      <p>Let&apos;s build something great, in record speed!</p>
    </IndexStyle>
  </Layout>
)

export default IndexPage
