import React from 'react'
import styled from 'styled-components'
import tw from 'twin.macro'
import Emblem from '../../images/greater-gatsby-emblem-only.svg'

const Text = styled.h1`
  ${tw`inline-block text-gray-900 tracking-tight select-none mb-2`};
  font-size: 3rem;
  line-height: 1.9rem;
`

const Subtitle = tw.p`block mt-2 p-0 text-gray-600 max-w-md text-center text-xl leading-tight`
const LogoStyle = tw.div`flex flex-col items-center justify-start my-4`

const Logo: React.FunctionComponent = () => {
  return (
    <LogoStyle>
      <img src={Emblem} alt="greater-gatsby logo" className="w-32" />
      <Text>greater-gatsby</Text>
      <Subtitle>Bare-bones and Lightweight GatsbyJS Starter</Subtitle>
    </LogoStyle>
  )
}

export default Logo
