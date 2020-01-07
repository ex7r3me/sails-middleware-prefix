const callWithPrefix = (prefix, middleware, req, res, next) => {
    if (prefix && middleware && req, res, next) {
        const regex = new RegExp('^' + prefix + '(/|$)')
        if (req.url.match(regex)) {
            req.proxyUrl = req.baseUrl = (req.proxyUrl || '') + prefix
            req.url = req.url.replace(regex, '/')
            return middleware(req, res, next)
        } else {
            next()
        }
    }
    else {
        throw new Error("Usage Error, sample: callWithPrefix('/foo/bar',middleware,req ,res ,next)")
    }
}
exports.callWithPrefix = callWithPrefix