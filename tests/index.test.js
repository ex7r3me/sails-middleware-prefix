const { callWithPrefix } = require('../index')

describe('Add Prefix', function () {
  describe('addPrefix()', function () {
    it('Should fails because of bad parameters', function () {
      expect(() => {
        callWithPrefix();
      }).toThrow("Usage Error, sample: callWithPrefix('/foo/bar',middleware,req ,res ,next)");
    });

    it('Should call middleware when url matches', function () {
      const middleware = jest.fn()
      const next = jest.fn()
      const req = { url: '/foo/bar/something' }
      const res = {}
      callWithPrefix('/foo/bar', middleware, req, res, next);
      expect(middleware.mock.calls.length).toBe(1)
      expect(next.mock.calls.length).toBe(0)

    });

    it('Should change req.url when url matches', function () {
      const middleware = jest.fn()
      const next = jest.fn()
      const req = { url: '/foo/bar/something' }
      const res = {}
      callWithPrefix('/foo/bar', middleware, req, res, next);
      expect(middleware.mock.calls[0][0].url).toBe('/something')

    });

    it('Should call next when url is not matches', function () {
      const middleware = jest.fn()
      const next = jest.fn()
      const req = { url: '/something' }
      const res = {}
      callWithPrefix('/foo/bar', middleware, req, res, next);
      expect(middleware.mock.calls.length).toBe(0)
      expect(next.mock.calls.length).toBe(1)
    });
  });
});