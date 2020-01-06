import { createGlobalStyle } from "styled-components"
import tw from "tailwind.macro"
import "./tailwind.css"

export default createGlobalStyle`
  /* apply a natural box layout model to all elements, but allowing components to change */
  
  body {
    ${tw`m-0 p-0 font-sans bg-yellow-400 text-gray-900`};
    -webkit-text-size-adjust: 100%;
    width: 100vw;
    max-width: 100vw;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-rendering: optimizeLegibility;
    -webkit-font-feature-settings: "pnum";
    font-feature-settings: "pnum";
    font-variant-numeric: proportional-nums;
  }
  h1, h2, h3, h4, h5, h6 {
    ${tw`font-bold`}
  }
`
