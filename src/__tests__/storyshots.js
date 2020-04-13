import 'jest-styled-components' /* eslint import/no-unassigned-import:off */
import * as renderer from 'react-test-renderer'
import initStoryshots from '@storybook/addon-storyshots'

import {styleSheetSerializer} from 'jest-styled-components/serializer'
import {addSerializer} from 'jest-specific-snapshot'

addSerializer(styleSheetSerializer)

const styledSnapshot = ({story, context}) => {
  const storyElement = story.render(context)
  const tree = renderer.create(storyElement).toJSON()
  expect(tree).toMatchSnapshot()
}

initStoryshots({
  test: styledSnapshot,
})
