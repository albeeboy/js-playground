# JS Playground

A place to test out node modules and JS code snippets. Note that some of the code is from the [Udemy Learn and Understand NodeJS](https://www.udemy.com/course/understand-nodejs/) course. The playground idea was born out of a desire to try new experiments beyond the official course work.

Author: [Alberto Cristancho](mailto:acristancho@mac.com)  
Last modified: 31 August 2022

## Requirements

- [Node.js](https://nodejs.org/) (lts/gallium)
- [nvm](https://github.com/nvm-sh/nvm)
- [nodemon](https://www.npmjs.com/package/nodemon)

## Installation

```sh
# navigate to the directory where you want to install the repository
git clone git@github.com:albeeboy/js-playground.git
cd js-playground
# insure you are using the right version of node
nvm use
npm install
```

## Running JS files

```sh
# from the root directory of the repository, invoke any JS file, for example, app.js
nodemon app.js
# nodemon will rerun the script whenever a change is detected
# ctrl-C will terminate the nodemon process
```

Happy coding! 🤠
