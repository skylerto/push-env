# Push ENV  

## Description  

Middleware to help manage node environments.  

## Installation

```UNIX
$ npm install push-env --save
```

## Usage/Configuration  

### Default configuration

Set the folder where the environment configurations live  
```javascript
var pushenv = require('push-env')
pushenv.set('envdir', './environments/')
```

Default configuration filenames respectively are development.js, production.js, and testing.js. If in any case a files does not exist default is development.js.

### Custom configuration filenames

If you don't want to follow convention, set the environment configuration files  

```javascript
var pushenv = require('push-env')
pushenv.set('envdir', './environments/')

// Configuration files must live in the above set envdir
pushenv.set('development', 'development.js')
pushenv.set('production', 'production.js')
pushenv.set('testing', 'production.js')
```


## License

MIT Copyright (c) 2015 Skyler Layne
