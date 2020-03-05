import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from "styled-components"
import tw from "tailwind.macro"

const Anchor = styled.a`
  ${tw`font-bold text-blue-600 hover:text-blue-300 mx-1`}
`

const IndexPage: React.FunctionComponent = () => (
  <Layout>
    <SEO title="Home" />

    <h1>Thanks for trying greater-gatsby!</h1>
    <p>
      This starter was created by
      <Anchor href="https://github.com/rbutera">Rai Butera (rbutera)</Anchor>
      of <Anchor href="https://rstlss.org">RSTLSS.org</Anchor>{" "}
    </p>
    <p>Let&apos;s build something great, in record speed!</p>
  </Layout>
)

export default IndexPage
