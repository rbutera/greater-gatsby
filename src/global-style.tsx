import { createGlobalStyle } from "styled-components"
import tw from "tailwind.macro"

import "./tailwind.css"

export default createGlobalStyle`
  body {
    ${tw`m-0 py-10 font-sans text-gray-900 flex flex-col text-lg justify-center items-center`};
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
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

  h1 {
    ${tw`text-3xl`}
  }
  a {
    ${tw`font-bold text-blue-600 hover:text-blue-400`}
  }
`
