# react-todo
React / Redux / ES6 Todo Application

<p>
<a href="https://travis-ci.org/Beraliv/react-todo"><img src="https://travis-ci.org/Beraliv/react-todo.svg" alt="Build Status"></a>
<a href='https://david-dm.org/Beraliv/react-todo'><img src='https://david-dm.org/Beraliv/react-todo.svg' alt="Dependency Status"></a>
<a href="https://david-dm.org/Beraliv/react-todo/?type=dev"><img src="https://david-dm.org/Beraliv/react-todo/dev-status.svg" alt="devDependency Status"></a>
<a href="https://opensource.org/licenses/MIT"><img src="https://img.shields.io/badge/License-MIT-green.svg" alt="MIT licence"></a>
</p>

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

## Table of Contents

- [Quick Start](#quick-start)
- [Project description](#project-description)
- [NPM tasks](#npm-tasks)
- [The possibilities of the project](#the-posibilities-of-the-project)
- [Future updates](#future-updates)
  - [Version 1.1.0](#version-1.1.0)
  - [Version 1.2.0](#version-1.2.0)
  - [Version 1.3.0](#version-1.3.0)
- [Demo](#demo)
- [License](#license)
  
  
## Quick Start

To download the project, you need to clone it first.

``
git clone https://github.com/Beraliv/react-todo
``

After that, you need to install all dependencies.
It will create `node_modules` folder.

``
npm i
``

Finally, you need to start the project.

``
npm run start
``

## Project description

The project consists of:

* [React](https://facebook.github.io/react/) library.
  * [Redux](https://github.com/Beraliv/react-todo#redux) Framework.
  * [Redux-Saga](https://github.com/Beraliv/react-todo#redux-saga) Framework.
* [Feather Icons](https://feathericons.com/).
* [Flat UI Colors](https://flatuicolors.com/).
* Pure [CSS](https://www.w3schools.com/css/css_intro.asp).

## Redux

Redux is the framework in the project by default in the branch `master`.

Documentation is available here: http://redux.js.org/

## Redux-Saga

Redux-Saga is accessible in the branch `redux-saga`. PR is created and can been seen here: [PR #3](https://github.com/Beraliv/react-todo/pull/3)

Documentation is available here: https://redux-saga.js.org/

## NPM tasks

### `npm run predeploy`

It builds the project and put all files to `build` folder

### `npm run deploy`

It saves `build` folder on a `gh-pages` branch creating it in case it doesn't exist.
After that you can see [Demo](#demo).

NB: it requires `npm` and `gh-pages` in a global space. Before running the task `npm` installs `gh-pages`.

## The possibilities of the project

For version 1.0.0 it's possible to:

* Add new todo.
* Remove todo.
* Make active and complete todo.
* Select all todos and toggle them all together (see 3rd point).

## Future updates

### Version 1.1.0

* [Allow to edit todos](https://github.com/Beraliv/react-todo/issues/1).
* ~~Save todos using local storage~~ from [issue 2](https://github.com/Beraliv/react-todo/issues/2).
* Add [ESLint](https://eslint.org/) support.

### Version 1.2.0

* [Webpack](https://webpack.github.io/) rewriting.
* [Less](http://lesscss.org/) support.
* [Jest](https://facebook.github.io/jest/) test cases.

### Version 1.3.0

* Add an adaptive design.
* Improve support for old browsers.
* Update UI.

## Demo

You can see built example [here](https://beraliv.github.io/react-todo/)

## License

MIT License
