# Countries
Based on this task - https://www.frontendmentor.io/challenges/rest-countries-api-with-color-theme-switcher-5cacc469fec04111f7b848ca
Frontend Mentor REST Countries API with color theme switcher - React implementation

## Dependencies
- [Redux](https://redux.js.org/): State Container
- [Redux Toolkit](https://www.npmjs.com/package/@reduxjs/toolkit) : The official toolset for Redux
- [Axios](https://github.com/axios/axios): Promise based HTTP client
- [React Router](https://reactrouter.com/): Declarative Routing
- [Node Sass](https://github.com/sass/node-sass): Sass Compiler (libsass)
- [Font Awesome](https://fontawesome.com/v5.15/how-to-use/on-the-web/using-with/react): Font Awesome

## Dev Dependencies

## Folder Structure
- **public/**: Static assets and html files
- **src/api/**: API related modules
- **src/assets/**: Static assets like images, fonts, icons, scss files
- **src/components/**: components are simple items, wrappers to achieve single functions. (Example: textbox, image, button, link )
- **src/pages/**: pages are template of the page types defined on Acoustic content.
- **src/modules/**: modules are uses components to build more complicated structures (Example: Carousel, Header )
- **src/redux/**: Redux Store related files
- **src/utilities**: Contains reusable helper functions which prevents code polution.

## Build
```sh
$ npm run-script build
```

## Run
```sh
$ npm install
$ npm start
```

### External Links
 - [API reference](https://restcountries.eu/rest/v2/)
 - [API documentation](https://restcountries.eu/)

### App Methodology
- https://atomicdesign.bradfrost.com/chapter-2/ --- This is how the site will be structured
- http://getbem.com/introduction/ --- CSS will follow this methodolgy using GRID