# This project is not longer maintained. You can Found the latest version of the code in the monorepo project on this [link](https://github.com/dcs-community/dcs-frontend).

# Binary Coffee Administration frontend application

This is the administration frontend application of the Binary Coffee community.

## Start application

Run `npm start` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build

**Expose environment variables**

All the environment variables of the project can be found in the `src/environments/environments.ts` file. If you want to change the value of some of these environments variables, you only need to have the environment in the system. In order to be possible to recognize the variable you need to put at the beginning the `NG_` prefix, so if the variable name is `apiUrl` you need to **export** the environment variable `NG_API_URL` and this will be automatically inserted in the `base.ts` file at the same level of the `environment.ts` file.

**Environment variables**

- `NG_API_URL`: api url
- `NG_GRAPHQL_URL`: graphql url
- `NG_SITE_URL`: url where the project is expose
- `NG_PRODUCTION`: define if the application is running in production or not. By default: `false`

**Build the project**

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Contributing

Any contribution is welcome, but please first read the CONTRIBUTING guide: [CONTRIBUTING.md](https://github.com/dcs-community/dcs-admin-frontend/blob/master/CONTRIBUTING.md)
