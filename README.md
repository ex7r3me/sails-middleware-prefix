# sails-middleware-prefix
Add prefix to sailsjs middlewares, like using **app.use('/foo/bar',middleware)** in express

[![Actions Status](https://github.com/{owner}/{repo}/workflows/{workflow_name}/badge.svg)](https://github.com/{owner}/{repo}/actions)

**Usage:**

in `config/http.js`

``` js
const { callWithPrefix } = require('sails-middleware-prefix')
const { expressMiddleware } = require('sample-express-middleware')

middleware: {
  
  order: [
    'customMiddleware',
  ],
    
  customMiddleware: function (...inputs) {
    return callWithPrefix('/foo/bar',expressMiddleware,...inputs)
  },
    
} 
```

**Development:**

Running tests:

`npm run test`