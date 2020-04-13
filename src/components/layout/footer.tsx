import React from 'react'
import tw from 'twin.macro'

const FooterStyle: React.FunctionComponent = tw.footer`my-10 text-center text-sm`

const Footer: React.FunctionComponent = () => (
  <FooterStyle>
    © {new Date().getFullYear()}, Built with
    {` `}
    <a href="https://www.gatsbyjs.org">Gatsby</a> +{' '}
    <a href="https://www.github.com/rbutera/greater-gatsby">greater-gatsby</a>
  </FooterStyle>
)

export default Footer
