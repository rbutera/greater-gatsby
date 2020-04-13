import React from 'react'
import tw from 'twin.macro'

const FeaturesStyle = tw.section``
const FeatureList = tw.ul`text-gray-700 m-4`
const Feature = tw.li`list-inside list-disc`

const Features: React.FunctionComponent = () => (
  <FeaturesStyle>
    <p>
      Ready for high quality JAMStack projects for 2020, this highly performant,
      lightweight and barebones starter includes preconfigured defaults for the
      following libraries:
    </p>

    <FeatureList>
      <Feature>Typescript</Feature>
      <Feature>PostCSS</Feature>
      <Feature>Storybook</Feature>
      <Feature>TailwindCSS</Feature>
      <Feature>Styled Components</Feature>
      <Feature>Jest</Feature>
      <Feature>Cypress</Feature>
      <Feature>eslint</Feature>
      <Feature>Prettier</Feature>
      <Feature>lint-staged</Feature>
    </FeatureList>
  </FeaturesStyle>
)

export default Features
