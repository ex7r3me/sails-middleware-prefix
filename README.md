# sails-middleware-prefix
Add prefix to sailsjs middlewares, like using **app.use** with prefix in express 

usage:

in `config/http.js`


`const { callWithPrefix } = require('../index')`

`callWithPrefix(/foo/bar', middleware, req, res, next)`
