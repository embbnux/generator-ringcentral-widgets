# generator-ringcentral-widgets [![NPM version][npm-image]][npm-url]

A generator tool to help initialize a [RingCentral Widgets](https://github.com/ringcentral/ringcentral-js-widgets) based app with one command.

## Dependences

* Node.js >= 8
* yarn or NPM

## Installation

First, install [Yeoman](http://yeoman.io) and generator-ringcentral-widgets using [npm](https://www.npmjs.com/) (we assume you have pre-installed [node.js > 8](https://nodejs.org/)) or yarn.

```bash
npm install -g yo
npm install -g generator-ringcentral-widgets
```

Then generate your new project:

```bash
yo ringcentral-widgets
```

### Start

Before you start, you need to create a [RingCentral developer free account](https://developer.ringcentral.com) and create a new RingCentral app with platform type - "Browser Based" with permissions that you need. For base app, it requires `Read Accounts` and `Subscription Webhook` permissions.

#### Update `.env` file in project root path

```
$ vim .env
```

```
API_CLIENT_ID=your ringcentral app client id
API_CLIENT_SECRET=your ringcentral app client secret
API_SERVER=ringcentral api server, eg: https://platform.devtest.ringcentral.com
REDIRECT_URI=your redirect uri, eg: http://localhost:8080/redirect.html
```

`API_CLIENT_ID` is your ringcentral app client id.

`API_CLIENT_SECRET` is your ringcentral app client secret.

`API_SERVER` is ringcentral api server, `https://platform.devtest.ringcentral.com` for sandbox environment and `https://platform.ringcentral.com` for production.

`REDIRECT_URI` is redirect uri that needs to add in your app settings in RingCentral Developer Website. For development in local, it should be `http://localhost:8080/redirect.html`. After your deploy this app to network space, it should be `your_host_address/redirect.html`.

#### Start development server

```
yarn start
```

Visit on [http://localhost:8080](http://localhost:8080) in browser

#### Build for production

* Update `.env` file with production config, such as `API_SERVER` and `REDIRECT_URI`.
* Build project

```
$ yarn build
```

* Upload files in release folder to your network space and visit it in browser.

## Tutotial

* [How to build a RingCentral App with RingCentral Widgets](https://embbnux.github.io/ringcentral-widgets-demo/)

### Read more

* The genarated app project is based on [RingCentral Commons](https://github.com/ringcentral/ringcentral-js-integration-commons) and [RingCentral Widgets](https://github.com/ringcentral/ringcentral-js-widgets).

* Commons modules are built with [RcModule](https://github.com/ringcentral/ringcentral-js-integration-commons/blob/master/docs/creating-modules.md) and [Dependency Injection](https://github.com/ringcentral/ringcentral-js-integration-commons/blob/master/docs/dependency-injection.md).

* RingCentral Commons depend on [Redux](https://redux.js.org/).

* RingCentral Widgets depend on [React](https://github.com/facebook/react) and [RingCentral Commons](https://github.com/ringcentral/ringcentral-js-integration-commons).

* The genarated app project is built with [Webpack](https://webpack.js.org/).

[npm-image]: https://badge.fury.io/js/generator-ringcentral-widgets.svg
[npm-url]: https://npmjs.org/package/generator-ringcentral-widgets
