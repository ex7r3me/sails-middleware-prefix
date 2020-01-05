const addPrefix = (prefix, middleware, req, res, next) => {
    var regex = new RegExp('^' + prefix + '(/|$)')
    if (req.url.match(regex)) {
        req.url = req.url.replace(regex, '/')
        req.baseUrl = prefix
        return middleware(req, res, next)
    }
    return next()
}
exports.default = addPrefix