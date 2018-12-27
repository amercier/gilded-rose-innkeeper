# Gilded Rose Innkeeper UI

> Web UI for Gilded Rose Innkeeper, built with [React].

[![Build Status](https://img.shields.io/travis/amercier/gilded-rose-innkeeper/master.svg)](https://travis-ci.org/amercier/gilded-rose-innkeeper)
[![Test Coverage](https://img.shields.io/codecov/c/github/amercier/gilded-rose-innkeeper/master.svg)](https://codecov.io/github/amercier/gilded-rose-innkeeper?branch=master)
[![Dependency Status](https://img.shields.io/david/amercier/gilded-rose-innkeeper.svg)](https://david-dm.org/amercier/gilded-rose-innkeeper)
[![devDependency Status](https://img.shields.io/david/dev/amercier/gilded-rose-innkeeper.svg)](https://david-dm.org/amercier/gilded-rose-innkeeper#info=devDependencies)
[![Greenkeeper](https://badges.greenkeeper.io/amercier/gilded-rose-innkeeper.svg)](https://github.com/amercier/gilded-rose-innkeeper/issues?q=label%3Agreenkeeper)

## Getting started

This application was bootstrapped with [Create React App].

### Dependencies

Before starting, install [NodeJS] and [Yarn].

```bash
yarn
```

Installs this project's dependencies in the `node_modules` folder.

### Development

**Note:** Gilded Rose API must be available at http://localhost:8080/.

```bash
yarn start
```

Runs the app in the development mode.<br>
Open <http://localhost:3000> to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### Testing

```bash
yarn test
```

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests] for more information.

### Building

```bash
REACT_APP_API_URL=http://localhost:8080 yarn build
```

> **Note:** replace `http://localhost:8080` with the URL where the API is available in production,
> ex: `/api`.

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment] for more information.

## License

[![License](https://img.shields.io/github/license/amercier/gilded-rose-innkeeper.svg)](LICENSE.md)

[react]: https://reactjs.org/
[create react app]: https://github.com/facebook/create-react-app
[nodejs]: https://nodejs.org/
[yarn]: https://yarnpkg.com/
[running tests]: https://facebook.github.io/create-react-app/docs/running-tests
[deployment]: https://facebook.github.io/create-react-app/docs/deployment
[github pages]: https://pages.github.com/
[github pages deployment]: https://docs.travis-ci.com/user/deployment/pages/
