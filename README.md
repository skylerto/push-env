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
pushenv.set('dev', './environments/development.js')
pushenv.set('prod', './environments/production.js')
pushenv.set('test', './environments/production.js')
```


## License

MIT Copyright (c) 2015 Skyler Layne
