import React from "react"
import styled from "styled-components"
import tw from "tailwind.macro"

const Text = styled.h1`
  ${tw`inline-block w-auto rounded bg-red-600 text-white p-4 tracking-tight select-none`};
  font-size: 3rem;
  line-height: 2.9rem;
`

const Logo = () => {
  return <Text>greater-gatsby</Text>
}

export default Logo
