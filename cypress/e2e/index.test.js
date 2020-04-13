describe('index page tests', () => {
  beforeEach(() => {
    cy.visit('/')
  })
  it('has has a list of features', () => {
    cy.findByText(/TypeScript/).should('be.visible')
    cy.findByText(/storybook/i).should('be.visible')
    cy.findByText(/postcss/i).should('be.visible')
    cy.findByText(/tailwindcss/i).should('be.visible')
    cy.findByText(/typescript/i).should('be.visible')
    cy.findByText(/styled components/i).should('be.visible')
    cy.findByText(/eslint/i).should('be.visible')
    cy.findByText(/prettier/i).should('be.visible')
    cy.findByText(/lint-staged/i).should('be.visible')
  })

  it('has a link to the github readme', () => {
    cy.get('a[href^="https://github.com/rbutera/greater-gatsby]"]').should(
      'be.visible'
    )
  })

  it('has installation instructions', () => {
    cy.findByText(
      'gatsby new PROJECT_NAME https://github.com/rbutera/greater-gatsby'
    ).should('be.visible')
  })
})
