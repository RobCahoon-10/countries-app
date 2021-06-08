# Countries

Frontend Mentor REST Countries API with color theme switcher - React implementation

## Dependencies
- [Redux](https://redux.js.org/): State Container
- [Redux Toolkit](https://www.npmjs.com/package/@reduxjs/toolkit) : The official toolset for Redux
- [Axios](https://github.com/axios/axios): Promise based HTTP client
- [React Router](https://reactrouter.com/): Declarative Routing
- [Node Sass](https://github.com/sass/node-sass): Sass Compiler (libsass)

## Dev Dependencies

## Folder Structure
<!-- - **acoistic/**: Latest backup of Acoustic Content -->
- **public/**: Static assets and html files
- **src/api/**: API related modules
- **src/assets/**: Static assets like images, fonts, icons, scss files
- **src/components/**: components are simple items, wrappers to achieve single functions. (Example: textbox, image, button, link )
- **src/pages/**: pages are template of the page types defined on Acoustic content.
- **src/modules/**: modules are uses components to build more complicated structures (Example: Carousel, Header )
- **src/redux/**: Redux Store related files
- **src/routers/**: Depending on variables routers are manage data flow to related modules.
- **src/utilities**: Contains reusable helper functions which prevents code polution.

## Development


## Test
<!-- - [Jest](https://jestjs.io/) : JavaScript Testing Framework
- [Enzyme](https://enzymejs.github.io/enzyme/) Enzyme is a JavaScript Testing utility for React -->

<!-- ```sh
$ npm test
``` -->

## Build
```sh
$ npm run-script build
```

#### Pull/Push Existing content

Use the following command to pull assets, content, and types, ignoring timestamps. This allows you to pull these artifacts whether they were modified or not since the last successful pull or push, to or from this working directory.

```sh
wchtools pull -act -I -v
```

Use the following command to push all categories, assets, content items, and content types from a specific directory. The -I switch pushes even unmodified items.

```sh
wchtools push -Cact -v --I 
```

### External Links
 - [API reference](https://restcountries.eu/rest/v2/)
 - [API documentation](https://restcountries.eu/)

### App Methodology
- https://atomicdesign.bradfrost.com/chapter-2/ --- This is how the site will be structured
- http://getbem.com/introduction/ --- CSS will follow this methodolgy using GRID