const addPrefix = (prefix, middleware, req, res, next) => {
    var regex = new RegExp('^' + prefix + '(/|$)')
    if (req.url.match(regex)) {
        req.proxyUrl = req.baseUrl = (req.proxyUrl || '') + prefix
        req.url = req.url.replace(regex, '/')
        return middleware(req, res, next)
    }
    return next()
}
export default addPrefix