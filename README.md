# Hub88 Frontend Developer Challenge

## Challenge description

The challenge is to consume open graphql data available at https://countries.trevorblades.com/ (countries query):

```
graphql url: https://countries.trevorblades.com/
query name: countries
```

[Full challenge description here](https://github.com/coingaming/hub88-fe/blob/main/README.md).

## Project installation and setup

1) Clone the repository (`git clone git@github.com:vebarina/hub88.git`)
2) Run `npm install` to install all dependencies.
3) Run `npm run dev` to start the app.

## Testing the app

Tests are created using [Vitest](https://vitest.dev/)
with [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/).

Run `npm test` to run the tests.

## Source code

### Technologies used

- React, with [Vite](https://vitejs.dev/)
- TypeScript
- GraphQL, with [Apollo client](https://www.apollographql.com/docs/)

### Folder structure

#### Assets

The *assets* folder contains all images and styles, in their respective sub-folders.

#### Components

This folder contains the different components used in the app, such as *InputFilter* and *Table*.

#### Queries

The *queries* folder includes the code to initialize a GraphQL client as well as the query to consume the required data.

#### Types

It contains TypeScript type/interfaces declarations.

#### Tests

Contains the file to test the application.