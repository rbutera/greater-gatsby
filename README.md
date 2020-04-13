# greater-gatsby

> **BAREBONES** and **LIGHTWEIGHT** GatsbyJS Default Starter with Typescript, PostCSS, Storybook, & Tailwind CSS

![greater-gatsby logo](src/images/greater-gatsby-logo-full-bg.png)

## Features

**BAREBONES** and **LIGHTWEIGHT** GatsbyJS Default Starter, stripped of example styles and with the following additions:

- Storybook (latest)
- PostCSS
- TailwindCSS (v1.0+)
- TypeScript
- Styled Components (v5+)
- twin.macro for TailwindCSS integration into styled-components
- fully configured eslint (via xo)
- Prettier code-formatting
- lint-staged for Code Quality.
- Cypress for easy end-to-end testing
- Jest for unit testing

Perfect for your best JAMStack projects in 2020 and beyond!

## Quick Start

```shell
gatsby new PROJECT_NAME https://github.com/rbutera/greater-gatsby
```

For a more detailed understanding on what's going on with this starter underneath the hood, check out the blog post written by [rbutera](https://github.com/rbutera) on Medium:

[BLOG POST: JAMStack Tutorial Part 1: GatsbyJS with Storybook, TailwindCSS, and Typescript Setup on Medium.com](https://medium.com/@rbutera/jamstack-tutorial-part-1-gatsbyjs-with-storybook-tailwindcss-and-typescript-setup-bd28855db897)

## Development Instructions

### Starting the Development Server

To install all the required dependencies using **Yarn**, run `yarn install`

Then you can start the development server:

```shell
gatsby develop
```

By default the development server will be running on port 3000, so to visit it open a browser and go to [https://localhost:3000](https://localhost:3000)

### Component Development Using Storybook

To develop components, run Storybook:

```shell
yarn storybook
```

By default Storybook runs on will be running on port 6006, so to visit it open a browser and go to [https://localhost:6006](https://localhost:6006)

## Project Structure and Instructions

### Components

We have included an example `<Logo />` component (complete with an example storybook story).

You can check these out at:
[./src/components/layout/logo.tsx](./src/components/layout/logo.tsx)
[./src/components/layout/logo.stories.tsx](./src/components/layout/logo.stories.tsx)

See also [the components for the index page](./src/components/index/)

## Testing

By the way, we've installed [testing-library](https://testing-library.com/) libraries for you for react, jest and cypress :smile:

### Unit Testing

Unit testing is included using [Jest](https://jest.io), which has been preconfigured with jest-extended and jest-dom.

To run unit tests:

```shell
yarn test:unit:ci # run once, OR...
yarn test:unit:dev # ... run and watch for changes
```

### End-to-End Testing

End to End testing is included using Cypress.

Accessibility is automatically tested using cypress.test.js

See [the index end to end test](./cypress/e2e/index.test.js)

To run end to end tests:

```shell
yarn test:e2e:ci # run once, OR...
yarn test:e2e:dev # ... run and watch for changes
```

### State Management (optional)

State management has been included using [Redux](https://redux.js.org).

To remove redux just remove src/state and empty out gatsby-browser.js

All redux related source files belong in [src/state](./src/state)

The redux setup is ready for unit tests. We've included some basic tests in there for you.

Add new reducers to [src/state/root-reducer](./src/state/root-reducer.ts)

We suggest you use the modular [redux-duck](https://github.com/erikras/ducks-modular-redux) redux structure convention, but you can use whatever you like!

Do check out the example [Counter](./src/state/counter.ts) which also has associated [tests](./src/state/__tests__/counter.ts)

## Plans for Future Development

- We intend to keep this starter lightweight, but also add some further opinionated customizations
- We admire the work in [gatsby-universal](https://github.com/fabe/gatsby-universal) and so we'll probably steal some of the features of that starter for this one.

## Roadmap and TODO

- [x] add typescript
- [x] add postCSS
- [x] remove default styles
- [x] remove default styles
- [x] write blog post
- [ ] create a good looking starter template
- [ ] link to projects using this starter
- [x] add unit tests
- [ ] add favicon generation
- [ ] add other features from [gatsby-universal](https://github.com/fabe/gatsby-universal)

## Contribution

All contributions / suggestions are very very welcome! Please open an issue, PR or send an email to rbutera ([rai@rstlss.org](mailto:rai@rstlss.org))

### Thanks

Big thanks to the following people for contributing:

- [rbutera](https://github.com/rbutera)
- [DBozhinovski](https://github.com/DBozhinovski)
