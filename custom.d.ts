// Used to suppress "unable to find module" typescript warnings for svgs
declare module '*.svg' {
  const content: string
  export default content
}
