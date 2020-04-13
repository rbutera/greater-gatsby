/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

import React from 'react'
import {Provider} from 'react-redux'
import store from './src/state/store'

/** wraps root element with redux provider */
export const wrapRootElement = ({element}) => {
  return <Provider store={store}>{element}</Provider>
}
