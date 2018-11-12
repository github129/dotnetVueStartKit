# Asp.NETCore 2.1 + Vuesax  + Vue 2 Starter

This repo contains an ASP.NET Core + Vuesax + Vue.js 2 starter template (VS2017 or command line)

This is based on [this repository](https://github.com/MarkPieszak/aspnetcore-Vue-starter)

# Features

- **ASP.NET Core 2.1**
  - Web API
- **VueJS 2**
  - Vuex (State Store)
- **[Vuesax (UI Template)](https://lusaxweb.github.io/vuesax/)**
- **eslint**
  - eslint-config-airbnb-base
- **testing**
  - mock file for json-server is available
- **Sample of common processing**
  - In this example, a notification by error handling is prepared

# Prerequisites:
 * [.Net Core 2.1](https://www.microsoft.com/net/download/windows)
 * [NodeJS](https://nodejs.org/) >= 8.9.4
 * [VSCode](https://code.visualstudio.com/) (ideally), or VS2017

# Installation:
 * Install the template from nuget: `dotnet new -i aspnetcore-vuejs`

# Getting Started:
 * Create folder from template: `dotnet new vuejs` ([Official documentation](https://docs.microsoft.com/en-us/dotnet/core/tools/dotnet-new?tabs=netcore2x))
   * This will automatically run `dotnet restore` unless you install with `dotnet new vuejs --skipRestore`
 * Restore Node dependencies by running `npm install`

## Start the application:
You have two choices when it come at how your preffer to run it. You can either use the command line or the build-in run command.

### 1. Using the command line
Run the application using `dotnet run` or `npm run dev`
- note `dotnet run` should be run in `Development` environment for hot reloading. This setting can be set either within the command line or via the `launchSettings.json` available in the `Properties` folder.

### 2. Using the built-in run command
Run the application in VSCode or Visual Studio 2017 by hitting `F5`.

## View your application running
Browse to [http://localhost:5000](http://localhost:5000)

## Testing

### 1. Using the command line

Install the mock server `npm install -D json-server`

### 2.Prepare a mock file

This is just an example
```javascript:mock.js

const jsonServer = require('json-server')
const server = jsonServer.create()
const middlewares = jsonServer.defaults()

server.use(middlewares)
server.listen(3000, () => {
  console.log('JSON Server is running')
})
server.get('/unauthorized', (req, res) => {
  res.status(401).jsonp({
    message: "unauthorized"
  })
})

server.get('/systemerror', (req, res) => {
  res.status(500).jsonp({
    message: "something wrong"
  })
})
```

### 3.Start mock server

Run the application using `node mock.js`

#### curl

````
$ curl -i localhost:3000/systemerror
HTTP/1.1 500 Internal Server Error
X-Powered-By: Express
Vary: Origin, Accept-Encoding
Access-Control-Allow-Credentials: true
Cache-Control: no-cache
Pragma: no-cache
Expires: -1
X-Content-Type-Options: nosniff
Content-Type: application/json; charset=utf-8
Content-Length: 32
ETag: W/"20-fhnUB5BwaOsQsXyG8exFr0MEGzY"
Date: Wed, 17 Jan 2018 13:16:01 GMT
Connection: keep-alive

{
  "message": "something wrong"
}
````

----
# License

[![MIT License](https://img.shields.io/badge/license-MIT-blue.svg?style=flat)](/content/LICENSE) 
----

