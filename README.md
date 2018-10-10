# The 23andMe Styleguide [![Build Status](https://travis-ci.org/23andMe/style.svg?branch=master)](https://travis-ci.org/23andMe/style)

#### The official repository for 23andMe Design System component implementation

## Getting going

1. Clone this repo: `git clone https://github.com/23andMe/style.git`
2. CD into the dir: `cd style`
3. Install stuff: `npm install`
4. Start er up: `npm run start`
5. View in browser: `https://localhost:8000`

## Developing in StyleDot

Editing happens under `style/src` and that processed outputs to `style/lib` and `style/docs`.
* `style/src/lib` is where the Design System components live. Edit here if you'd like to add or update an actual component for use in the styleguide and npm package.
* `style/src/docs` is where the framing for the styleguide website lives. Edit here if you'd like to update or add a component example to the styleguide.

Running `npm run start` from earlier will automatically watch for changes and update them in the browser.

**Careful:** You might have noticed that the files under `style/lib/scss` and `style/src/lib/scss` are identical. This can get confusing at times, make sure you're always editing the files that are under `style/src`


## Running tests
Tests are written using Jest, and are pretty easy to run: `npm run test`
