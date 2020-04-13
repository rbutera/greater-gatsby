import React from 'react'
import tw from 'twin.macro'
const Code = tw.pre`inline-block font-mono p-2 rounded bg-purple-600 text-white text-sm w-auto`

const GetStarted: React.FunctionComponent = () => {
  return (
    <section>
      <p>
        <strong>So what are you waiting for? Get started today:</strong>
      </p>
      <Code>
        gatsby new PROJECT_NAME https://github.com/rbutera/greater-gatsby
      </Code>
      <p>
        For more instructions check out the{' '}
        <a href="https://github.com/rbutera/greater-gatsby">readme.</a>
      </p>
    </section>
  )
}

export default GetStarted
